const express = require("express");

const router = express.Router();

const {
  validateClass,
  findAndValidateClass,
} = require("../middlewares/authorization");
const { Class, User } = require("../models");

/* POST class */
router.post("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { coverPhotoUrl, name, subject, description, type } = req.body;
  try {
    const newClass = await Class.create({
      coverPhotoUrl,
      name,
      subject,
      description,
      type,
      tutorId,
    });
    res.json({ message: "Class created successfully", newClass: newClass });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  try {
    const classesInfo = await Class.findAll({ where: { tutorId } });
    res.json({ classes: classesInfo });
  } catch (err) {
    next(err);
  }
});

router.get("/:classId", async (req, res, next) => {
  const { classId } = req.params;
  const { id: tutorId } = req.decoded;
  try {
    const classInfo = await validateClass(classId, tutorId);
    const students = await Promise.all(
      (
        await classInfo.getStudentProfiles()
      ).map(async (sp) => {
        const student = await sp.getUser();
        return { student: student, profile: sp };
      })
    );
    res.json({ class: classInfo, students: students });
  } catch (err) {
    next(err);
  }
});

router.patch("/:classId", async (req, res, next) => {
  const { classId } = req.params;
  const { id: tutorId } = req.decoded;
  const { coverPhotoUrl, name, subject, description, type } = req.body;
  try {
    var classInfo = await validateClass(classId, tutorId);
    classInfo = await classInfo.update({
      coverPhotoUrl,
      name,
      subject,
      description,
      type,
    });
    res.json({
      message: "Class information updated successfully",
      newClass: classInfo,
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:classId", async (req, res, next) => {
  const { classId } = req.params;
  const { id: tutorId } = req.decoded;
  try {
    const classInfo = await validateClass(classId, tutorId);
    await classInfo.destroy();
    res.json({ class: classInfo });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
