const express = require("express");
const router = express.Router();

const { DefaultSchedule, OffsetSchedule, Class } = require("../models");

const {
  createClassProperty,
  getClassProperty,
  findClassPropertiesWithCondition,
  updateClassProperty,
  deleteClassProperty,
} = require("../middlewares/classProperty");
const { filterObject } = require("../middlewares/helper");

const { findAndValidateClass } = require("../middlewares/authorization");

const defaultScheduleFields = ["day", "startTime", "endTime"];
const offsetScheduleFields = [
  "defaultScheduleId",
  "fromDate",
  "toDate",
  "startTime",
  "endTime",
];
const num2day = {
  0: "sun",
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri",
  6: "sat",
};

function getWeek(d) {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  const monday = new Date(d.setDate(diff));
  const tueday = new Date(d.setDate(monday.getDate() + 1));
  const wednesday = new Date(d.setDate(monday.getDate() + 2));
  const thursday = new Date(d.setDate(monday.getDate() + 3));
  const friday = new Date(d.setDate(monday.getDate() + 4));
  const saturday = new Date(d.setDate(monday.getDate() + 5));
  const sunday = new Date(d.setDate(monday.getDate() + 6));

  return [monday, tueday, wednesday, thursday, friday, saturday, sunday];
}

router.post("/default", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, defaultScheduleFields);
  try {
    const DS = await createClassProperty(
      tutorId,
      classId,
      DefaultSchedule,
      data
    );
    return res.json({
      message: "Default Schedule created successfully",
      DefaultSchedule: DS.dataValues,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/default/:defaultScheduleId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { defaultScheduleId } = req.params;
  try {
    const DS = await getClassProperty(
      tutorId,
      DefaultSchedule,
      defaultScheduleId
    );

    return res.json({
      DefaultSchedule: DS,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/default/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, defaultScheduleFields);
  // console.log(data);
  try {
    const DS = await findClassPropertiesWithCondition(
      tutorId,
      classId,
      DefaultSchedule,
      data
    );
    return res.json({
      DefaultSchedules: DS,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/default/:defaultScheduleId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { defaultScheduleId } = req.params;
  const data = filterObject(req.body, defaultScheduleFields);
  try {
    const DS = await updateClassProperty(
      tutorId,
      DefaultSchedule,
      defaultScheduleId,
      data
    );
    return res.json({
      message: "Default Schedule updated successfully",
      DefaultSchedule: DS,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/default/:defaultScheduleId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { defaultScheduleId } = req.params;
  try {
    const DS = await deleteClassProperty(
      tutorId,
      DefaultSchedule,
      defaultScheduleId
    );
    return res.json({
      message: "Default Schedule deleted successfully",
      DefaultSchedule: DS,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/offset", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, offsetScheduleFields);
  try {
    const DS = await findAndValidateClass(
      DefaultSchedule,
      data.defaultScheduleId,
      tutorId
    );
    const fromdate = new Date(data.fromDate);
    if (day2num[fromdate.getDay()] !== DS.day) {
      throw new Error("Day of Offset Schedule not matched");
    }
    if (!data.startTime) {
      data.startTime = DS.startTime;
    }
    if (!data.endTime) {
      data.endTime = DS.endTime;
    }
    const OS = await OffsetSchedule.create({ classId, ...data });
    return res.json({
      message: "Offset Schedule created successfully",
      OffsetSchedule: OS.dataValues,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/offset/:offsetScheduleId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { offsetScheduleId } = req.params;
  try {
    const OS = await getClassProperty(
      tutorId,
      OffsetSchedule,
      offsetScheduleId
    );

    return res.json({
      OffsetSchedule: OS,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/offset/", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { classId } = req.query;
  const data = filterObject(req.body, offsetScheduleFields);
  // console.log(data);
  try {
    const OS = await findClassPropertiesWithCondition(
      tutorId,
      classId,
      OffsetSchedule,
      data
    );
    return res.json({
      OffsetSchedules: OS,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/offset/:offsetScheduleId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { offsetScheduleId } = req.params;
  const data = filterObject(req.body, offsetScheduleFields);
  const currentDate = new Date();
  const newToDate = new Date(data.toDate);
  try {
    if (newToDate < currentDate)
      throw new Error("Cannot delay Offset Schedule to the past");

    const OS = await updateClassProperty(
      tutorId,
      OffsetSchedule,
      offsetScheduleId,
      data,
      (offsetSchedule) => {
        const oldToDate = new Date(offsetSchedule.toDate);
        if (oldToDate < currentDate)
          throw new Error("Cannot modify Offset Schedule of the past");
      }
    );
    return res.json({
      message: "Offset Schedule updated successfully",
      OffsetSchedule: OS,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/offset/:offsetScheduleId", async (req, res, next) => {
  const { id: tutorId } = req.decoded;
  const { offsetScheduleId } = req.params;
  try {
    const OS = await deleteClassProperty(
      tutorId,
      OffsetSchedule,
      offsetScheduleId
    );
    return res.json({
      message: "Offset Schedule deleted successfully",
      OffsetSchedule: OS,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/current-week", async (req, res, next) => {
  const currentDate = new Date();
  const [monday, tueday, wednesday, thursday, friday, saturday, sunday] =
    getWeek(currentDate);
  const day2date = {
    sun: sunday,
    mon: monday,
    tue: tueday,
    wed: wednesday,
    thu: thursday,
    fri: friday,
    sat: saturday,
  };
  const { id: tutorId } = req.decoded;

  const classes = await Class.findAll({ where: { tutorId } });
  const result = await Promise.all(
    classes.map(async (cls) => {
      const ds = await DefaultSchedule.findAll({ where: { classId: cls.id } });
      const os = await OffsetSchedule.findAll({ where: { classId: cls.id } });
      const toBeRemove = os
        .filter((s) => {
          const offsetFromDate = new Date(s.fromDate);
          return monday <= offsetFromDate && offsetFromDate <= sunday;
        })
        .map((s) => s.defaultScheduleId);
      const toBeAdded = os.filter((s) => {
        const offsetToDate = new Date(s.toDate);
        return monday <= offsetToDate && offsetToDate <= sunday;
      });
      return [
        ...ds
          .filter((s) => !toBeRemove.includes(s.id))
          .map((s) => {
            return {
              date: day2date[s.day].toDateString(),
              classId: s.classId,
              startTime: s.startTime,
              endTime: s.endTime,
            };
          }),
        ...toBeAdded.map((s) => {
          return {
            date: new Date(s.toDate).toDateString(),
            classId: s.classId,
            startTime: s.startTime,
            endTime: s.endTime,
          };
        }),
      ];
    })
  );

  res.json({
    startDate: monday.toDateString(),
    endDate: sunday.toDateString(),
    result: result.flat(),
  });
});

module.exports = router;
