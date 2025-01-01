'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feedback.init({
    classId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    satisfactoryScore: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};