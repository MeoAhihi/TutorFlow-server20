"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.belongsToMany(models.StudentProfile, {
        through: models.ClassStudents,
      });
    }
  }
  Class.init(
    {
      coverPhotoUrl: DataTypes.STRING,
      name: DataTypes.STRING,
      subject: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.STRING,
      tutorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
