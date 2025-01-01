'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassStudents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClassStudents.init({
    classId: DataTypes.INTEGER,
    studentProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClassStudents',
  });
  return ClassStudents;
};