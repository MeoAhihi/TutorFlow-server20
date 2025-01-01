const { Class, StudentProfile } = require("../models");

const validateClass = async (classId, tutorId) => {
  const classInfo = await Class.findByPk(classId);

  if (Object.keys(classInfo).length === 0) throw new Error("No class exist");

  if (classInfo.tutorId !== tutorId) throw new Error("Tutor's ID not matched");

  return classInfo;
};

const findAndValidateClass = async (model, instanceId, tutorId) => {
  const instance = await model.findByPk(instanceId);
  if (!instance) throw new Error(model.tableName + " doesn't exist");

  if (await validateClass(instance.classId, tutorId)) return instance;
};

const validateStudentProfile = async (tutorId, studentProfileId) => {
  const Profile = await StudentProfile.findByPk(studentProfileId);

  if (!Profile) throw new Error("No Student profile found");

  if (Profile.tutorId !== tutorId) throw new Error("Tutor's ID not matched");

  return Profile;
};

module.exports = {
  validateClass,
  findAndValidateClass,
  validateStudentProfile,
};

// module.exports = {
//   validateClass: (req, res, next) => {
//     const { classId, tutorId } = req.body;
//     try {
//       return validateClass(classId, tutorId);
//     } catch (err) {
//       next(err);
//     }
//   },
//   findAndValidateClass: (req, res, next) => {
//     const { model, instanceId, tutorId } = req.body;
//     try {
//       return validateClass(model, instanceId, tutorId);
//     } catch (err) {
//       next(err);
//     }
//   },
// };
