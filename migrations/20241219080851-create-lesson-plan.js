'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LessonPlans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      classId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      unitGoal: {
        type: Sequelize.TEXT
      },
      Objective: {
        type: Sequelize.TEXT
      },
      target: {
        type: Sequelize.STRING
      },
      instruction: {
        type: Sequelize.TEXT
      },
      conclution: {
        type: Sequelize.TEXT
      },
      reflection: {
        type: Sequelize.TEXT
      },
      question: {
        type: Sequelize.TEXT
      },
      isDirectIns: {
        type: Sequelize.BOOLEAN
      },
      isExpeerimentalIns: {
        type: Sequelize.BOOLEAN
      },
      isIndirectIns: {
        type: Sequelize.BOOLEAN
      },
      isIndependantWork: {
        type: Sequelize.BOOLEAN
      },
      isGrapicOrganizerAct: {
        type: Sequelize.BOOLEAN
      },
      isModelingAct: {
        type: Sequelize.BOOLEAN
      },
      isPBLAct: {
        type: Sequelize.BOOLEAN
      },
      isStationAct: {
        type: Sequelize.BOOLEAN
      },
      Technology: {
        type: Sequelize.STRING
      },
      isThinkingAct: {
        type: Sequelize.BOOLEAN
      },
      isAnecdotalCmtAsmt: {
        type: Sequelize.BOOLEAN
      },
      isClassObsAsmt: {
        type: Sequelize.BOOLEAN
      },
      isConferenceAsmt: {
        type: Sequelize.BOOLEAN
      },
      isFormalAsmt: {
        type: Sequelize.BOOLEAN
      },
      isOralPresentationAsmt: {
        type: Sequelize.BOOLEAN
      },
      isAsmt: {
        type: Sequelize.BOOLEAN
      },
      isQuizAsmt: {
        type: Sequelize.BOOLEAN
      },
      isRubricAsmt: {
        type: Sequelize.BOOLEAN
      },
      isStudentWorkSampleAsmt: {
        type: Sequelize.BOOLEAN
      },
      isPeerAsmt: {
        type: Sequelize.BOOLEAN
      },
      isSelfOralAsmt: {
        type: Sequelize.BOOLEAN
      },
      isSelfWrittenAsmt: {
        type: Sequelize.BOOLEAN
      },
      AttachedFileUrls: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LessonPlans');
  }
};