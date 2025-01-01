"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OffsetSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OffsetSchedule.init(
    {
      defaultScheduleId: DataTypes.INTEGER,
      fromDate: DataTypes.DATEONLY,
      toDate: DataTypes.DATEONLY,
      startTime: DataTypes.STRING,
      endTime: DataTypes.STRING,
      classId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OffsetSchedule",
    }
  );
  return OffsetSchedule;
};
