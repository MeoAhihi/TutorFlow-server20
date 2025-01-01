"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        firstName: "Wind",
        lastName: "Ly",
        birthday: new Date("2003-04-28"),
        avatarUrl: "",
        phoneNumber: "(+84)835607205",
        email: "viphongly2804@gmail.com",
        address: "",
        password: bcrypt.hashSync("11111111", 10),
        country: "vietnam",
        biography: "a handsome tutor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: "Ly",
        lastName: "Boi San",
        birthday: new Date("2007-06-10"),
        avatarUrl: "",
        phoneNumber: "(+84)835607205",
        email: "boisanly1006@gmail.com",
        address: "",
        password: bcrypt.hashSync("boisanly1006", 10),
        country: "vietnam",
        biography: "a pretty girl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: "James",
        lastName: "Ly",
        birthday: new Date("2007-10-07"),
        avatarUrl: "",
        phoneNumber: "(+84)835607205",
        email: "tracdongly0710@gmail.com",
        address: "",
        password: bcrypt.hashSync("tracdongly0710", 10),
        country: "vietnam",
        biography: "a stylish boy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        firstName: "Ly",
        lastName: "Uyen My",
        birthday: new Date("2012-10-26"),
        avatarUrl: "",
        phoneNumber: "(+84)835607205",
        email: "uyenmyly2610@gmail.com",
        address: "",
        password: bcrypt.hashSync("uyenmyly2610", 10),
        country: "vietnam",
        biography: "a child",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        firstName: "Chau",
        lastName: "Hong Yen",
        birthday: new Date("2007-01-01"),
        avatarUrl: "",
        phoneNumber: "(+84)835607205",
        email: "hongyenchau0101@gmail.com",
        address: "",
        password: bcrypt.hashSync("hongyenchau0101", 10),
        country: "vietnam",
        biography: "a excelent student",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Classes", [
      {
        id: 1,
        coverPhotoUrl: "",
        name: "Toan-Boi San",
        subject: "mathematics",
        description: "Lop toan co ban cua Boi San",
        type: "offline",
        tutorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        coverPhotoUrl: "",
        name: "Toan-Trac Dong",
        subject: "mathematics",
        description: "Lop toan tam trung cua Trac Dong",
        type: "offline",
        tutorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        coverPhotoUrl: "",
        name: "Toan-Uyen My",
        subject: "mathematics",
        description: "Lop toan co ban cua Uyen My",
        type: "offline",
        tutorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        coverPhotoUrl: "",
        name: "Ly-Hoa-Hong Yen",
        subject: "chemistry,physics",
        description: "Lop Vat ly, Hoa hoc nang cao cua Hong Yen",
        type: "online",
        tutorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("StudentProfiles", [
      {
        id: 1,
        gradeLevel: "Lop 12",
        strength: "Ky nang thuyet trinh",
        challenges: "toc do tu duy",
        learningGoal: "thi thptqg duoc 7 diem",
        preferedLearningMethod: "copying",
        engagementStyle: "",
        studyHabit: "",
        parentExpectation: "thi thptqg duoc 7 diem",
        parentFirstName: "Ly",
        parentLastName: "Phu Hung",
        parentAvatarUrl: "",
        parentPhoneNumber: "",
        parentEmail: "",
        tutorId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 2,
        gradeLevel: "Lop 12",
        strength: "Ky nang ngon ngu",
        challenges: "bien doi dai so",
        learningGoal: "thi thptqg duoc 9 diem",
        preferedLearningMethod: "podcsting",
        engagementStyle: "podcast",
        studyHabit: "nghe podcast",
        parentExpectation: "thi thptqg duoc diem cao",
        parentFirstName: "Ly",
        parentLastName: "Quy Hung",
        parentAvatarUrl: "",
        parentPhoneNumber: "",
        parentEmail: "",
        tutorId: 1,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        gradeLevel: "Lop 7",
        strength: "Social Networking",
        challenges: "Kha nang ghi nho",
        learningGoal: "thi hoc ki duoc 8 diem",
        preferedLearningMethod: "xem thuyet trinh",
        engagementStyle: "",
        studyHabit: "",
        parentExpectation: "thi duoc diem cao",
        parentFirstName: "Ly",
        parentLastName: "Thanh Hung",
        parentAvatarUrl: "",
        parentPhoneNumber: "",
        parentEmail: "",
        tutorId: 1,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        gradeLevel: "Lop 12",
        strength: "Nho cach tu duy",
        challenges: "",
        learningGoal: "co hoc ba diem cao",
        preferedLearningMethod: "nghe giang",
        engagementStyle: "",
        studyHabit: "",
        parentExpectation: "Hoc ba dep de di du hoc",
        parentFirstName: "Nguyen",
        parentLastName: "Kim Tham",
        parentAvatarUrl: "",
        parentPhoneNumber: "",
        parentEmail: "",
        tutorId: 1,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("ClassStudents", [
      {
        classId: 1,
        studentProfileId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classId: 2,
        studentProfileId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classId: 3,
        studentProfileId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classId: 4,
        studentProfileId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("DefaultSchedules", [
      {
        day: "thu",
        startTime: "19:00",
        endTime: "20:30",
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: "sun",
        startTime: "19:00",
        endTime: "20:30",
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: "wed",
        startTime: "19:30",
        endTime: "21:00",
        classId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: "sat",
        startTime: "19:30",
        endTime: "21:00",
        classId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: "wed",
        startTime: "18:00",
        endTime: "19:30",
        classId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: "sat",
        startTime: "18:00",
        endTime: "19:30",
        classId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: "tue",
        startTime: "19:00",
        endTime: "21:00",
        classId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        day: "fri",
        startTime: "19:00",
        endTime: "21:00",
        classId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Classes", null, {});
    await queryInterface.bulkDelete("ClassStudents", null, {});
    await queryInterface.bulkDelete("DefaultSchedules", null, {});
    await queryInterface.bulkDelete("OffsetSchedules", null, {});
    await queryInterface.bulkDelete("StudentProfiles", null, {});
  },
};