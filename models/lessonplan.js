'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LessonPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LessonPlan.init({
    classId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    unit: DataTypes.STRING,
    date: DataTypes.DATE,
    unitGoal: DataTypes.TEXT,
    Objective: DataTypes.TEXT,
    target: DataTypes.STRING,
    instruction: DataTypes.TEXT,
    conclution: DataTypes.TEXT,
    reflection: DataTypes.TEXT,
    question: DataTypes.TEXT,
    isDirectIns: DataTypes.BOOLEAN,
    isExpeerimentalIns: DataTypes.BOOLEAN,
    isIndirectIns: DataTypes.BOOLEAN,
    isIndependantWork: DataTypes.BOOLEAN,
    isGrapicOrganizerAct: DataTypes.BOOLEAN,
    isModelingAct: DataTypes.BOOLEAN,
    isPBLAct: DataTypes.BOOLEAN,
    isStationAct: DataTypes.BOOLEAN,
    Technology: DataTypes.STRING,
    isThinkingAct: DataTypes.BOOLEAN,
    isAnecdotalCmtAsmt: DataTypes.BOOLEAN,
    isClassObsAsmt: DataTypes.BOOLEAN,
    isConferenceAsmt: DataTypes.BOOLEAN,
    isFormalAsmt: DataTypes.BOOLEAN,
    isOralPresentationAsmt: DataTypes.BOOLEAN,
    isAsmt: DataTypes.BOOLEAN,
    isQuizAsmt: DataTypes.BOOLEAN,
    isRubricAsmt: DataTypes.BOOLEAN,
    isStudentWorkSampleAsmt: DataTypes.BOOLEAN,
    isPeerAsmt: DataTypes.BOOLEAN,
    isSelfOralAsmt: DataTypes.BOOLEAN,
    isSelfWrittenAsmt: DataTypes.BOOLEAN,
    AttachedFileUrls: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'LessonPlan',
  });
  return LessonPlan;
};