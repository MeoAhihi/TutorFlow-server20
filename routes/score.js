const express = require("express");
const router = express.Router();

const { Score } = require("../models");
const {
  findClassPropertiesWithCondition,
  createClassProperty,
  getClassProperty,
  updateClassProperty,
  deleteClassProperty,
} = require("../middlewares/classProperty");
const { findAndValidateClass } = require("../middlewares/authorization");
const { filterObject } = require("../middlewares/helper");

const scoreFields = [
  "studentProfileId",
  "assignmentId",
  "title",
  "score",
  "coef",
];

router.post("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, scoreFields);
  //   console.log(data, ",", req.body);
  try {
    const Score = await createClassProperty(tutorId, classId, Score, data);
    return res.json({
      message: "Score created successfully",
      Score: Score,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, scoreFields);
  //   console.log(tutorId, classId, data);
  try {
    const Scores = await findClassPropertiesWithCondition(
      tutorId,
      classId,
      Score,
      data
    );
    return res.json({
      Scores: Scores,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:scoreId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { scoreId } = req.params;
  const data = filterObject(req.body, scoreFields);
  try {
    const Score = await updateClassProperty(tutorId, Score, scoreId, data);
    return res.json({
      message: "Score updated successfully",
      Score: Score,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:scoreId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { scoreId } = req.params;
  try {
    const Score = await deleteClassProperty(tutorId, Score, scoreId);
    return res.json({
      message: "Score deleted successfully",
      Score: Score,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:scoreId/export", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { scoreId } = req.params;
  try {
    const Score = await findAndValidateClass(Score, scoreId, tutorId);

    return res.download("D:\\test-multer\\in.html");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
