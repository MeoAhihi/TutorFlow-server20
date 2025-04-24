const express = require("express");
const router = express.Router();
const { Q1, median, Q3, mean } = require("statlib");

const { Score } = require("../models");

router.get("/score-trend", async (req, res, next) => {
  const { classId } = req.params;
  const { id: tutorId } = req.decoded;
  const classInfo = await validateClass(classId, tutorId);

  const scores = await Score.findAll({
    where: { classId: classId },
    order: [["createdAt", "ASC"]],
    attributes: ["score", "createdAt"],
  });

  if (scores.length === 0) {
    return res.json({ movingAverage: [] });
  }

  const movingAverage = [];
  for (let i = 0; i < scores.length; i++) {
    const start = Math.max(0, i - 9);
    const end = i + 1;
    const rangeScores = scores.slice(start, end).map((s) => s.score);
    const avg =
      rangeScores.reduce((sum, score) => sum + score, 0) / rangeScores.length;
    movingAverage.push({ date: scores[i].createdAt, average: avg });
  }

  res.json({
    movingAverage,
    isUp:
      movingAverage[movingAverage.length - 1].average >
      movingAverage[0].average,
  });
});
router.get("/average", async (req, res, next) => {
  const { classId } = req.params;
  const { id: tutorId } = req.decoded;
  const classInfo = await validateClass(classId, tutorId);

  const scores = await Score.findAll({
    where: { classId: classId },
    attributes: [[sequelize.fn("AVG", sequelize.col("score")), "avgScore"]],
  });

  res.json({ average: scores });
});
router.get("/quartile", async (req, res, next) => {
  const { classId } = req.params;
  const { id: tutorId } = req.decoded;
  const classInfo = await validateClass(classId, tutorId);

  const scores = await Score.findAll({
    where: { classId: classId },
    order: [["score", "ASC"]],
  });

  const q1 = Q1(scores.map((s) => s.score));
  const median = median(scores.map((s) => s.score));
  const q3 = Q3(scores.map((s) => s.score));

  res.json({ q1, median, q3, iqr: q3 - q1 });
});
router.get("/feedback", async (req, res, next) => {});
router.get("/attendance", async (req, res, next) => {});

module.exports = router;
