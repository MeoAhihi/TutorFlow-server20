'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sessions', {
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
      thumbnailUrl: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      topicCovered: {
        type: Sequelize.STRING
      },
      subjectPerformance: {
        type: Sequelize.STRING
      },
      behavioralObservation: {
        type: Sequelize.STRING
      },
      emotionalFactor: {
        type: Sequelize.STRING
      },
      motivationTrigger: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.TEXT
      },
      AssignmentId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Sessions');
  }
};