const express = require("express");
const router = express.Router();

const { Assignment } = require("../models");
const {
  findClassPropertiesWithCondition,
  createClassProperty,
  getClassProperty,
  updateClassProperty,
  deleteClassProperty,
} = require("../middlewares/classProperty");
const { findAndValidateClass } = require("../middlewares/authorization");
const { filterObject } = require("../middlewares/helper");

const assignmentFields = ["title", "dueDate", "content", "attachedFiles"];

router.post("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, assignmentFields);
  console.log(data, ",", req.body);
  try {
    const assignment = await createClassProperty(
      tutorId,
      classId,
      Assignment,
      data
    );
    return res.json({
      message: "Assignment created successfully",
      Assignment: assignment,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:assignmentId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { assignmentId } = req.params;
  try {
    const assignment = await getClassProperty(
      tutorId,
      Assignment,
      assignmentId
    );

    return res.json({
      Assignment: assignment,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, assignmentFields);
  //   console.log(tutorId, classId, data);
  try {
    const assignments = await findClassPropertiesWithCondition(
      tutorId,
      classId,
      Assignment,
      data
    );
    return res.json({
      Assignments: assignments,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:assignmentId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { assignmentId } = req.params;
  const data = filterObject(req.body, assignmentFields);
  try {
    const assignment = await updateClassProperty(
      tutorId,
      Assignment,
      assignmentId,
      data
    );
    return res.json({
      message: "Session updated successfully",
      Assignment: assignment,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:assignmentId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { assignmentId } = req.params;
  try {
    const assignment = await deleteClassProperty(
      tutorId,
      Assignment,
      assignmentId
    );
    return res.json({
      message: "Default Schedule deleted successfully",
      Assignment: assignment,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:assignmentId/export", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { assignmentId } = req.params;
  try {
    const assignment = await findAndValidateClass(
      Assignment,
      assignmentId,
      tutorId
    );

    return res.download("D:\\test-multer\\in.html");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
