const { Op } = require("sequelize");
const express = require("express");
const createError = require("http-errors");

const router = express.Router();

const {
  validateClass,
  findAndValidateClass,
  validateStudentProfile,
} = require("../middlewares/authorization");
const { User, StudentProfile } = require("../models");
const { filterObject } = require("../middlewares/helper");

const studentBasicFields = [
  "firstName",
  "lastName",
  "birthday",
  "phoneNumber",
  "email",
  "address",
  "country",
  "biography",
];
const studentProfileFields = [
  "gradeLevel",
  "strength",
  "challenges",
  "learningGoal",
  "preferedLearningMethod",
  "engagementStyle",
  "studyHabit",
  "parentExpectation",
  "parentFirstName",
  "parentLastName",
  "parentAvatarUrl",
  "parentPhoneNumber",
  "parentEmail",
];

router.post("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { birthday } = req.body;
  try {
    const newUser = await User.create({
      ...filterObject(req.body, studentBasicFields),
      birthday: new Date(birthday),
    });
    const newStudentProfile = await newUser.createStudentProfile({
      ...filterObject(req.body, studentProfileFields),
      tutorId,
    });
    res.json({
      message: "Student profile created successfully",
      basicInfo: newUser,
      profile: newStudentProfile,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;

  try {
    if (Object.keys(req.body).length === 0) {
      const student = await StudentProfile.findAll({
        where: { tutorId },
        include: User,
      });
      return res.json({ student: student });
    }
    if (req.body.exact) {
      const student = await StudentProfile.findAll({
        where: {
          tutorId,
          ...filterObject(req.body, studentProfileFields),
        },
        include: {
          model: User,
          where: filterObject(req.body, studentBasicFields),
        },
      });
      return res.json({ student: student });
    }
    const student = await StudentProfile.findAll({
      where: {
        [Op.or]: {
          tutorId,
          ...filterObject(req.body, studentProfileFields),
        },
      },
      include: {
        model: User,
        where: {
          [Op.or]: filterObject(req.body, studentBasicFields),
        },
      },
    });
    return res.json({ student: student });
  } catch (err) {
    next(err);
  }
});

router.get("/:studentId", async (req, res, next) => {
  const { studentId } = req.params;
  const { id: tutorId } = req.decoded;
  try {
    const studentProfile = await validateStudentProfile(tutorId, studentId);
    const student = await studentProfile.getUser();
    res.json({
      student: { ...student, ...studentProfile },
    });
  } catch (err) {
    if (err.message === "No Student profile found")
      return next(createError.NotFound("No Student profile found"));
    next(err);
  }
});

router.patch("/:studentId", async (req, res, next) => {
  const { studentId } = req.params;
  const { id: tutorId } = req.decoded;
  try {
    var studentProfile = await validateStudentProfile(tutorId, studentId);
    studentProfile = await studentProfile.update(
      filterObject(req.body, studentProfileFields)
    );
    const student = await studentProfile.update(
      filterObject(req.body, studentBasicFields)
    );
    res.json({
      message: "Student information updated successfully",
      newStudent: { ...student, ...studentProfile },
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:studentId", async (req, res, next) => {
  const { studentId } = req.params;
  const { id: tutorId } = req.decoded;
  try {
    const studentProfile = await validateStudentProfile(tutorId, studentId);
    const student = await studentProfile.getUser();
    await studentProfile.destroy();
    await student.destroy();
    res.json({
      message: "student profile deleted successlly",
      student: { ...student, ...studentProfile },
    });
  } catch (err) {
    next(err);
  }
});

router.link("/:studentId", async (req, res, next) => {
  const { studentId } = req.params;
  const { id: tutorId } = req.decoded;
  const { classId } = req.body;
  try {
    const classInfo = await validateClass(classId, tutorId);
    const student = await validateStudentProfile(tutorId, studentId);
    const ClassStudent = await classInfo.addStudentProfile(student);
    console.log(ClassStudent);
    res.json({
      message: "Student added to class successfully",
      studentId: ClassStudent[0].StudentProfileId,
      classId: ClassStudent[0].ClassId,
    });
  } catch (error) {
    next(error);
  }
});

router.unlink("/:studentId", async (req, res, next) => {
  const { studentId } = req.params;
  const { id: tutorId } = req.decoded;
  const { classId } = req.body;
  try {
    const classInfo = await validateClass(classId, tutorId);
    const student = await validateStudentProfile(tutorId, studentId);
    await classInfo.removeStudentProfile(student);

    res.json({
      message: "Student removed from class successfully",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
