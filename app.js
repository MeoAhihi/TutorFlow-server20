const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();

require("./middlewares/authentication");
const users = require("./routes/users");
const classesRoute = require("./routes/class");
const authRoute = require("./routes/auth");
const StudentRoute = require("./routes/student");
const ScheduleRoute = require("./routes/schedule");
const SessionRoute = require("./routes/session");
const AssignmentRoute = require("./routes/assignment");
const LessonPlanRoute = require("./routes/lesson-plan");
const FeedbackRoute = require("./routes/feedback");
const ScoreRoute = require("./routes/score");
const ProgressRoute = require("./routes/progress");
const { decodeJwtMiddleware } = require("./middlewares/decodeToken");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use(
  "/api/v1/classes",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  classesRoute
);
app.use(
  "/api/v1/students",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  StudentRoute
);
app.use(
  "/api/v1/schedules",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  ScheduleRoute
);
app.use(
  "/api/v1/sessions",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  SessionRoute
);
app.use(
  "/api/v1/assignments",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  AssignmentRoute
);
app.use(
  "/api/v1/lesson-plans",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  LessonPlanRoute
);
app.use(
  "/api/v1/feedbacks",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  FeedbackRoute
);
app.use(
  "/api/v1/scores",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  ScoreRoute
);
app.use(
  "/api/v1/progresses",
  passport.authenticate("jwt", { session: false }),
  decodeJwtMiddleware,
  ProgressRoute
);

module.exports = app;
