"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Session.belongsToMany(models.StudentProfile, {
        through: models.SessionStudent,
      });
    }
  }
  Session.init(
    {
      classId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      thumbnailUrl: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      topicCovered: DataTypes.STRING,
      subjectPerformance: DataTypes.STRING,
      behavioralObservation: DataTypes.STRING,
      emotionalFactor: DataTypes.STRING,
      motivationTrigger: DataTypes.STRING,
      note: DataTypes.TEXT,
      AssignmentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Session",
    }
  );
  return Session;
};
