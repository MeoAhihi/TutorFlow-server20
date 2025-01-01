'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Assignment.init({
    classId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    content: DataTypes.TEXT,
    attachedFiles: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};