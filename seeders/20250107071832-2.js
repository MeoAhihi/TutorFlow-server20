"use strict";
const bcrypt = require("bcrypt");
const score = require("../models/score");
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
    await queryInterface.bulkInsert(
      "Assignments",
      [
        {
          classId: 1,
          title: "Bài tập Nguyên Hàm",
          dueDate: new Date("2025-01-31"),
          content:
            "<strong>Câu 1</strong><p>Hãy tính nguyên hàm của x<sup>2</sup></p><strong>Câu 2</strong><p>Hãy tính tích phân của hàm e<sup>x</sup> từ x = 0 đến x = +infty</p>",
        },
        {
          classId: 2,
          title: "Bài tập Nguyên Hàm",
          dueDate: new Date("2025-01-31"),
          content:
            "<strong>Câu 1</strong><p>Hãy tính nguyên hàm của x<sup>2</sup></p><strong>Câu 2</strong><p>Hãy tính tích phân của hàm e<sup>x</sup> từ x = 0 đến x = +infty</p>",
        },
        {
          classId: 3,
          title: "Bài tập Tỉ lệ thức",
          dueDate: new Date("2025-02-05"),
          content:
            "<strong>Câu 1</strong><p>x : y = 2 : 3</p><p>x + y = 180&deg;</p><p>Hãy tìm giá trị của x và y</p><strong>Câu 2</strong><p>x : y : z = 12 : 1 : 16</p><p>x + y + z = 29</p><p>Hãy tìm giá trị của x, y và z</p>",
        },
        {
          classId: 4,
          title: "Bài tập Từ trường",
          dueDate: new Date("2025-02-20"),
          content:
            "<strong>Câu 1: </strong><p>Phương của lực Lorenxo</p><p>A. trùng với phương của véc - tơ cảm ứng từ.</p><p>B. vuông góc với cả đường sức từ và véc - tơ vận tốc của hạt.</p><p>C. vuông góc với đường sức từ, nhưng trùng với phương của vận tốc của hạt.</p><p>D. trùng với phương véc - tơ vận tốc của hạt.</p>",
        },
      ].map((object) => ({
        ...object,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
    await queryInterface.bulkInsert(
      "Feedbacks",
      [
        {
          classId: 1,
          content:
            "Gia sư rất tận tâm và nhiệt tình. Con tôi đã tiến bộ rõ rệt trong môn Toán. Cảm ơn gia sư rất nhiều!",
          satisfactoryScore: 9,
        },
        {
          classId: 2,
          content:
            "Gia sư rất kiên nhẫn và có phương pháp giảng dạy hiệu quả. Con tôi rất thích học với gia sư.",
          satisfactoryScore: 8,
        },
        {
          classId: 3,
          content:
            "Gia sư rất nhiệt tình và có kiến thức sâu rộng. Con tôi đã cải thiện điểm số đáng kể.",
          satisfactoryScore: 10,
        },
        {
          classId: 4,
          content:
            "Gia sư rất thân thiện và dễ gần. Con tôi cảm thấy thoải mái khi học và tiến bộ nhanh chóng.",
          satisfactoryScore: 7,
        },
      ].map((object) => ({
        ...object,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
    await queryInterface.bulkInsert(
      "LessonPlans",
      [
        {
          classId: 1,
          title: "Calculus - Integration",
          unit: "Calculus",
          date: new Date("2025-01-07"),
          unitGoal:
            "Students will understand the concept of integration as the reverse of differentiation and learn to solve basic definite and indefinite integrals.",
          Objective:
            "By the end of the lesson, students will be able to evaluate basic integrals using standard formulas and understand the applications of definite integrals in calculating area under curves.",
          target: "Grade 12 Advanced Mathematics",
          instruction:
            "1. Begin with a review of differentiation. \n2. Introduce the concept of integration as the reverse process. \n3. Demonstrate solving indefinite integrals with examples. \n4. Explain definite integrals and their connection to areas under curves. \n5. Guide students through practice problems.",
          conclution:
            "Summarize the key points about integration and its significance. Reinforce how definite integrals are used in real-life applications like physics and engineering.",
          reflection:
            "Did the students grasp the connection between differentiation and integration? Were they able to solve the provided problems confidently?",
          question:
            "What are the key differences between definite and indefinite integrals? How can you interpret the result of a definite integral in a real-world context?",
          isDirectIns: true,
          isExpeerimentalIns: false,
          isIndirectIns: false,
          isIndependantWork: true,
          isGrapicOrganizerAct: false,
          isModelingAct: true,
          isPBLAct: false,
          isStationAct: false,
          Technology:
            "Graphing software (Desmos or GeoGebra), projector for visual aids",
          isThinkingAct: true,
          isAnecdotalCmtAsmt: false,
          isClassObsAsmt: true,
          isConferenceAsmt: false,
          isFormalAsmt: true,
          isOralPresentationAsmt: false,
          isAsmt: true,
          isQuizAsmt: true,
          isRubricAsmt: false,
          isStudentWorkSampleAsmt: true,
          isPeerAsmt: false,
          isSelfOralAsmt: false,
          isSelfWrittenAsmt: true,
        },
        {
          classId: 2,
          title: "Geometry - Equation of the Plane",
          unit: "Geometry",
          date: new Date("2025-01-07"),
          unitGoal:
            "Students will understand the concept of planes in three-dimensional space and learn how to derive and use the equation of a plane.",
          Objective:
            "By the end of the lesson, students will be able to derive the equation of a plane given a normal vector and a point, and apply this knowledge to solve geometric problems in 3D space.",
          target: "Grade 11 Advanced Mathematics",
          instruction:
            "1. Review the concept of vectors and dot product. \n2. Define a plane in 3D space using a normal vector and a point. \n3. Derive the general form of the plane equation: Ax + By + Cz + D = 0. \n4. Solve example problems involving finding the equation of a plane. \n5. Discuss applications, such as finding the intersection of planes and lines.",
          conclution:
            "Recap the process of finding the equation of a plane and its real-world applications, such as in computer graphics and architecture.",
          reflection:
            "Were students able to connect vector concepts to the plane equation? Did they understand how to solve problems involving planes in 3D?",
          question:
            "How does the normal vector determine the orientation of the plane? How can we use the equation of a plane to determine the distance of a point from the plane?",
          isDirectIns: true,
          isExpeerimentalIns: false,
          isIndirectIns: false,
          isIndependantWork: true,
          isGrapicOrganizerAct: true,
          isModelingAct: true,
          isPBLAct: false,
          isStationAct: false,
          Technology:
            "3D graphing tools (GeoGebra 3D or WolframAlpha), projector for demonstrations",
          isThinkingAct: true,
          isAnecdotalCmtAsmt: false,
          isClassObsAsmt: true,
          isConferenceAsmt: false,
          isFormalAsmt: true,
          isOralPresentationAsmt: false,
          isAsmt: true,
          isQuizAsmt: true,
          isRubricAsmt: false,
          isStudentWorkSampleAsmt: true,
          isPeerAsmt: false,
          isSelfOralAsmt: false,
          isSelfWrittenAsmt: true,
        },
        {
          classId: 3,
          title: "Statistics - Pie Chart",
          unit: "Statistics",
          date: new Date("2025-01-07"),
          unitGoal:
            "Students will understand the purpose of pie charts and learn how to create and interpret them effectively.",
          Objective:
            "By the end of the lesson, students will be able to construct pie charts from data sets and analyze them to make informed conclusions.",
          target: "Grade 7 Mathematics",
          instruction:
            "1. Introduce the concept of pie charts and their purpose in representing data as parts of a whole. \n2. Demonstrate how to calculate percentages for each category. \n3. Show how to convert percentages into angles (360° total for a circle). \n4. Guide students through drawing pie charts using compasses and protractors. \n5. Provide examples of interpreting pie charts in real-world scenarios, such as survey data.",
          conclution:
            "Summarize the steps for creating and interpreting pie charts and discuss their usefulness in visualizing proportional data.",
          reflection:
            "Did the students understand the conversion from percentages to angles? Were they able to draw accurate pie charts and interpret the information?",
          question:
            "Why is a pie chart a good way to represent proportional data? In what situations might a pie chart not be the best choice?",
          isDirectIns: true,
          isExpeerimentalIns: false,
          isIndirectIns: false,
          isIndependantWork: true,
          isGrapicOrganizerAct: true,
          isModelingAct: true,
          isPBLAct: false,
          isStationAct: false,
          Technology:
            "Spreadsheet software (Excel, Google Sheets) for creating pie charts, projector for examples",
          isThinkingAct: true,
          isAnecdotalCmtAsmt: false,
          isClassObsAsmt: true,
          isConferenceAsmt: false,
          isFormalAsmt: true,
          isOralPresentationAsmt: false,
          isAsmt: true,
          isQuizAsmt: true,
          isRubricAsmt: false,
          isStudentWorkSampleAsmt: true,
          isPeerAsmt: false,
          isSelfOralAsmt: false,
          isSelfWrittenAsmt: true,
        },
        {
          classId: 4,
          title: "Chemistry - Metal Reactions",
          unit: "Chemical Reactions",
          date: "2025-01-07",
          unitGoal:
            "Students will understand the reactivity of metals and learn to identify and predict the outcomes of basic metal reactions with acids, water, and oxygen.",
          Objective:
            "By the end of the lesson, students will be able to explain the reactivity series, predict products of metal reactions, and write balanced chemical equations for these reactions.",
          target: "Grade 10 Chemistry",
          instruction:
            "1. Introduce the concept of the reactivity series of metals. \n2. Explain how metals react with water, acids, and oxygen, using examples. \n3. Conduct a demonstration of common reactions, such as sodium with water and zinc with hydrochloric acid. \n4. Guide students in writing and balancing chemical equations for observed reactions. \n5. Discuss real-world applications, such as corrosion and metal extraction.",
          conclution:
            "Review the reactivity series and key metal reactions. Emphasize the importance of understanding metal reactivity in industrial and environmental contexts.",
          reflection:
            "Did the students grasp the reactivity series and how to use it to predict reactions? Were they able to balance equations correctly?",
          question:
            "How does the position of a metal in the reactivity series determine its reactions with water and acids? What precautions should we take when handling reactive metals?",
          isDirectIns: true,
          isExpeerimentalIns: true,
          isIndirectIns: false,
          isIndependantWork: true,
          isGrapicOrganizerAct: false,
          isModelingAct: true,
          isPBLAct: false,
          isStationAct: true,
          Technology:
            "Projector for videos and diagrams, lab equipment for demonstrations",
          isThinkingAct: true,
          isAnecdotalCmtAsmt: false,
          isClassObsAsmt: true,
          isConferenceAsmt: false,
          isFormalAsmt: true,
          isOralPresentationAsmt: false,
          isAsmt: true,
          isQuizAsmt: true,
          isRubricAsmt: false,
          isStudentWorkSampleAsmt: true,
          isPeerAsmt: false,
          isSelfOralAsmt: false,
          isSelfWrittenAsmt: true,
        },
      ].map((object) => ({
        ...object,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
    await queryInterface.bulkInsert(
      "Scores",
      [
        {
          classId: 1,
          studentProfileId: 1,
          title: "Kiểm tra giữa HK1",
          score: 6.5,
          coef: 3,
        },
        {
          classId: 1,
          studentProfileId: 1,
          title: "Kiểm tra cuối HK1",
          score: 8.3,
          coef: 3,
        },
        {
          classId: 1,
          studentProfileId: 1,
          title: "Điểm bài tập Nguyên hàm 1",
          coef: 1,
          score: 8,
        },
        {
          classId: 2,
          studentProfileId: 2,
          title: "Kiểm tra giữa HK1",
          score: 7.8,
          coef: 3,
        },
        {
          classId: 2,
          studentProfileId: 2,
          title: "Kiểm tra cuối HK1",
          score: 7.8,
          coef: 3,
        },
        {
          classId: 2,
          studentProfileId: 2,
          title: "Điểm bài tập Nguyên hàm 1",
          coef: 1,
          score: 9,
        },
        {
          classId: 3,
          studentProfileId: 3,
          title: "Kiểm tra giữa HK1",
          score: 8.0,
          coef: 3,
        },
        {
          classId: 3,
          studentProfileId: 3,
          title: "Kiểm tra cuối HK1",
          score: 7.3,
          coef: 3,
        },
        {
          classId: 3,
          studentProfileId: 3,
          title: "Điểm bài tập Tỷ lệ thức",
          coef: 1,
          score: 8,
        },
        {
          classId: 4,
          studentProfileId: 4,
          title: "Kiểm tra giữa HK1",
          score: 8.5,
          coef: 3,
        },
        {
          classId: 4,
          studentProfileId: 4,
          title: "Kiểm tra cuối HK1",
          score: 8.3,
          coef: 3,
        },
        {
          classId: 4,
          studentProfileId: 4,
          title: "Điểm bài tập Từ trường",
          coef: 1,
          score: 7,
        },
      ].map((object) => ({
        ...object,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
    await queryInterface.bulkInsert("Sessions", [
      {
        classId: 1,
        title: "Luyện tập Nguyên hàm",
        duration: 1.5 * 60 * 60 * 1000,
        topicCovered: "PP đặt ẩn phụ và nguyên hàm từng phần",
        subjectPerformance: "hiểu bài",
        behavioralObservation: "ghi nhớ bằng lặp lại",
        emotionalFactor: "vui vẻ, thoải mái",
        motivationTrigger: "mua trà sữa",
        createdAt: new Date("2025-01-05 18:22:00"),
        updatedAt: new Date("2025-01-05"),
      },
      {
        classId: 4,
        title: "Lý thuyết từ trường",
        duration: 1.5 * 60 * 60 * 1000,
        topicCovered: "vector cảm ứng từ, từ phổ, đường sức từ, lực từ",
        subjectPerformance: "hiểu bài",
        behavioralObservation: "ghi nhớ bằng làm lại bài",
        emotionalFactor: "bình tĩnh",
        motivationTrigger: "",
        createdAt: new Date("2025-01-06 19:02:00"),
        updatedAt: new Date("2025-01-06"),
      },
      {
        classId: 2,
        title: "Hình học tọa độ",
        duration: 1.5 * 60 * 60 * 1000,
        topicCovered: "Phương trình mặt phẳng tổng quát và chính tắc",
        subjectPerformance: "hiểu bài",
        behavioralObservation: "ghi nhớ bằng làm lại bài",
        emotionalFactor: "bình tĩnh",
        motivationTrigger: "",
        createdAt: new Date("2025-01-04 19:35:00"),
        updatedAt: new Date("2025-01-04"),
      },
      {
        classId: 3,
        title: "Tam giác",
        duration: 1.5 * 60 * 60 * 1000,
        topicCovered:
          "Quan hệ các góc trong tam giác, quan hệ giữa 3 cạnh tam giác",
        subjectPerformance: "hiểu bài",
        behavioralObservation: "còn lo ra trong giờ học",
        emotionalFactor: "",
        motivationTrigger: "",
        createdAt: new Date("2025-01-03 09:10:00"),
        updatedAt: new Date("2025-01-03"),
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
    await queryInterface.bulkDelete("Assignments", null, {});
    await queryInterface.bulkDelete("Classes", null, {});
    await queryInterface.bulkDelete("ClassStudents", null, {});
    await queryInterface.bulkDelete("DefaultSchedules", null, {});
    await queryInterface.bulkDelete("Feedbacks", null, {});
    await queryInterface.bulkDelete("LessonPlans", null, {});
    await queryInterface.bulkDelete("OffsetSchedules", null, {});
    await queryInterface.bulkDelete("Scores", null, {});
    await queryInterface.bulkDelete("Sessions", null, {});
    await queryInterface.bulkDelete("SessionStudents", null, {});
    await queryInterface.bulkDelete("StudentProfiles", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
