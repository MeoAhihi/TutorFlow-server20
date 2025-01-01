const express = require("express");
const router = express.Router();
const multer = require("multer");
// const upload = multer({ dest: "./public/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({
  storage: storage,
  limits: { fieldSize: 10 * 1024 * 1024 },
});

const {
  Session,
  ClassStudents,
  SessionStudent,
  StudentProfile,
} = require("../models");
const { Op } = require("sequelize");
const CreateError = require("http-errors");

const {
  createClassProperty,
  findClassPropertiesWithCondition,
  updateClassProperty,
  getClassProperty,
} = require("../middlewares/classProperty");
const {
  findAndValidateClass,
  validateClass,
} = require("../middlewares/authorization");
const { filterObject } = require("../middlewares/helper");

const sessionFields = [
  "title",
  "thumbnailUrl",
  "topicCovered",
  "note",
  "subjectPerformance",
  "behavioralObservation",
  "emotionalFactor",
  "motivationTrigger",
  "AssignmentId",
];

router.post("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, [
    "title",
    "thumbnailUrl",
    "topicCovered",
    "note",
  ]);
  try {
    const session = await createClassProperty(tutorId, classId, Session, data);
    return res.json({
      message: "Session started successfully",
      Session: session,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/attendances", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;

  try {
    const classInfo = await validateClass(classId, tutorId);
    const sessions = await Session.findAll({
      where: { classId: classInfo.id },
      attributes: ["id", "createdAt", "classId"],
      include: { model: StudentProfile, attributes: ["id"]},
    });
    res.json(sessions);
  } catch (error) {
    next(error);
  }
});

router.get("/:sesionId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { sesionId } = req.params;
  try {
    const session = await getClassProperty(tutorId, Session, sesionId);

    return res.json({
      Session: session,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, sessionFields);
  //   console.log(tutorId, classId, data);
  try {
    const session = await findClassPropertiesWithCondition(
      tutorId,
      classId,
      Session,
      data
    );
    return res.json({
      Sessions: session,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:sessionId/end", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { sessionId } = req.params;
  const currentTime = new Date();
  try {
    const session = await findAndValidateClass(Session, sessionId, tutorId);
    await session.update({ duration: currentTime - session.createdAt });
    res.json({ message: "Session ended successfully", Session: session });
  } catch (error) {
    next(error);
  }
});

router.post("/:sessionId/attendance", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { sessionId } = req.params;
  const { studentIds } = req.body;
  try {
    const session = await findAndValidateClass(Session, sessionId, tutorId);
    const classId = session.classId;

    const studentsJoined = await ClassStudents.findAll({
      where: { classId, studentProfileId: { [Op.in]: studentIds } },
    });
    const joinedStudentIds = studentsJoined.map(
      (classStudent) => classStudent.studentProfileId
    );
    const studentsNotJoined = studentIds.filter(
      (studentId) => !joinedStudentIds.includes(studentId)
    );
    if (studentsNotJoined.length !== 0)
      throw {
        studentsNotJoined,
        error: new Error("Student(s) not joined class"),
      };
    // console.log(first)
    //     await session.addStudentProfiles(studentsJoined);
    await SessionStudent.bulkCreate(
      joinedStudentIds.map((id) => {
        return { SessionId: sessionId, StudentProfileId: id };
      })
    );

    res.json({
      message: "Student attendance checked successfully",
      Session: session,
      students: studentsJoined,
    });
  } catch (error) {
    if (error.error.message === "Student(s) not joined class")
      CreateError.Conflict({
        studentsNotJoined: error.studentsNotJoined,
      });
    next(error);
  }
});

router.patch("/:sessionId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { sessionId } = req.params;
  const data = filterObject(req.body, sessionFields);
  try {
    const session = await updateClassProperty(
      tutorId,
      Session,
      sessionId,
      data
    );
    return res.json({
      message: "Session updated successfully",
      Session: session,
    });
  } catch (error) {
    next(error);
  }
});

// router.post(
//   "/:sessionId/picture",
//   upload.single("picture"),
//   async (req, res, next) => {
//     const { id: tutorId } = req.decoded;
//     const { sessionId } = req.params;
//     // const file = req.file;

//     try {
//       const session = await findAndValidateClass(Session, sessionId, tutorId);
//       console.log(req.file);
//       res.send("ok");
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;
