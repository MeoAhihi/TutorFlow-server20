'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gradeLevel: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.STRING
      },
      challenges: {
        type: Sequelize.STRING
      },
      learningGoal: {
        type: Sequelize.STRING
      },
      preferedLearningMethod: {
        type: Sequelize.STRING
      },
      engagementStyle: {
        type: Sequelize.STRING
      },
      studyHabit: {
        type: Sequelize.STRING
      },
      parentExpectation: {
        type: Sequelize.TEXT
      },
      parentFirstName: {
        type: Sequelize.STRING
      },
      parentLastName: {
        type: Sequelize.STRING
      },
      parentAvatarUrl: {
        type: Sequelize.STRING
      },
      parentPhoneNumber: {
        type: Sequelize.STRING
      },
      parentEmail: {
        type: Sequelize.STRING
      },
      tutorId: {
        type: Sequelize.INTEGER
      },
      userId: {
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
    await queryInterface.dropTable('StudentProfiles');
  }
};