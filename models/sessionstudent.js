'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SessionStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  SessionStudent.init({
    sessionId: DataTypes.INTEGER,
    studentProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SessionStudent',
  });
  return SessionStudent;
};