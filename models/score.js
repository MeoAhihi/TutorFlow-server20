'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Score.init({
    classId: DataTypes.INTEGER,
    studentProfileId: DataTypes.INTEGER,
    assignmentId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    score: DataTypes.FLOAT,
    coef: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};