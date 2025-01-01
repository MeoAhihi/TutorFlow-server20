const express = require("express");
const router = express.Router();

const { LessonPlan } = require("../models");
const {
  findClassPropertiesWithCondition,
  createClassProperty,
  getClassProperty,
  updateClassProperty,
  deleteClassProperty,
} = require("../middlewares/classProperty");
const { findAndValidateClass } = require("../middlewares/authorization");
const { filterObject } = require("../middlewares/helper");

const lessonPlanFields = [
  "title",
  "unit",
  "date",
  "unitGoal",
  "Objective",
  "target",
  "instruction",
  "conclution",
  "reflection",
  "question",
  "isDirectIns",
  "isExpeerimentalIns",
  "isIndirectIns",
  "isIndependantWork",
  "isGrapicOrganizerAct",
  "isModelingAct",
  "isPBLAct",
  "isStationAct",
  "Technology",
  "isThinkingAct",
  "isAnecdotalCmtAsmt",
  "isClassObsAsmt",
  "isConferenceAsmt",
  "isFormalAsmt",
  "isOralPresentationAsmt",
  "isAsmt",
  "isQuizAsmt",
  "isRubricAsmt",
  "isStudentWorkSampleAsmt",
  "isPeerAsmt",
  "isSelfOralAsmt",
  "isSelfWrittenAsmt",
  "AttachedFileUrls",
];

router.post("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, lessonPlanFields);
  //   console.log(data, ",", req.body);
  try {
    const LessonPlan = await createClassProperty(
      tutorId,
      classId,
      LessonPlan,
      data
    );
    return res.json({
      message: "Lesson Plan created successfully",
      LessonPlan: LessonPlan,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:lessonPlanId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { lessonPlanId } = req.params;
  try {
    const LessonPlan = await getClassProperty(
      tutorId,
      LessonPlan,
      lessonPlanId
    );

    return res.json({
      LessonPlan: LessonPlan,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, lessonPlanFields);
  //   console.log(tutorId, classId, data);
  try {
    const LessonPlans = await findClassPropertiesWithCondition(
      tutorId,
      classId,
      LessonPlan,
      data
    );
    return res.json({
      LessonPlans: LessonPlans,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:lessonPlanId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { lessonPlanId } = req.params;
  const data = filterObject(req.body, lessonPlanFields);
  try {
    const LessonPlan = await updateClassProperty(
      tutorId,
      LessonPlan,
      lessonPlanId,
      data
    );
    return res.json({
      message: "Lesson Plan updated successfully",
      LessonPlan: LessonPlan,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:lessonPlanId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { lessonPlanId } = req.params;
  try {
    const LessonPlan = await deleteClassProperty(
      tutorId,
      LessonPlan,
      lessonPlanId
    );
    return res.json({
      message: "Lesson Plan deleted successfully",
      LessonPlan: LessonPlan,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:lessonPlanId/export", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { lessonPlanId } = req.params;
  try {
    const LessonPlan = await findAndValidateClass(
      LessonPlan,
      lessonPlanId,
      tutorId
    );

    return res.download("D:\\test-multer\\in.html");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
