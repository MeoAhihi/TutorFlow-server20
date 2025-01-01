"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentProfile.belongsTo(models.User);
      StudentProfile.belongsToMany(models.Class, {
        through: models.ClassStudents,
      });
      StudentProfile.belongsToMany(models.Session, {
        through: models.SessionStudent,
      });
    }
  }
  StudentProfile.init(
    {
      gradeLevel: DataTypes.STRING,
      strength: DataTypes.STRING,
      challenges: DataTypes.STRING,
      learningGoal: DataTypes.STRING,
      preferedLearningMethod: DataTypes.STRING,
      engagementStyle: DataTypes.STRING,
      studyHabit: DataTypes.STRING,
      parentExpectation: DataTypes.TEXT,
      parentFirstName: DataTypes.STRING,
      parentLastName: DataTypes.STRING,
      parentAvatarUrl: DataTypes.STRING,
      parentPhoneNumber: DataTypes.STRING,
      parentEmail: DataTypes.STRING,
      tutorId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "StudentProfile",
    }
  );
  return StudentProfile;
};
