const { validateClass, findAndValidateClass } = require("./authorization");
const { Op } = require("sequelize");

const createClassProperty = async (tutorId, classId, model, data) => {
  const isValid = await validateClass(classId, tutorId);
  if (isValid) return await model.create({ classId, ...data });
};

const getClassProperty = async (tutorId, model, instanceId) => {
  return await findAndValidateClass(model, instanceId, tutorId);
};

const findClassPropertiesWithCondition = async (
  tutorId,
  classId,
  model,
  data
) => {
  const isValid = await validateClass(classId, tutorId);
  if (isValid && Object.keys(data).length === 0) {
    return await model.findAll({ where: { classId } });
  }
  const exact = data.exact;
  delete data.exact;
  if (exact) {
    return await model.findAll({ where: { classId, ...data } });
  }
  return await model.findAll({ where: { classId, [Op.or]: data } });
};

const updateClassProperty = async (
  tutorId,
  model,
  instanceId,
  data,
  validation = (instance) => {}
) => {
  const instance = await findAndValidateClass(model, instanceId, tutorId);
  validation(instance);
  if (instance) return await instance.update(data);
};

const deleteClassProperty = async (tutorId, model, instanceId) => {
  const instance = await findAndValidateClass(model, instanceId, tutorId);
  if (instance) {
    instance.destroy({ where: { tutorId } });
    return instance;
  }
};

module.exports = {
  createClassProperty,
  getClassProperty,
  findClassPropertiesWithCondition,
  updateClassProperty,
  deleteClassProperty,
};
