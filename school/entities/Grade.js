const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Grade",
  tableName: "GRADE",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    score: {
      type: "integer",
      nullable: false,
    },
    retake_score: {
      type: "integer",
      nullable: true,  // 原先資料表已有資料，新欄位必須允許為空
    },
  },
  relations: {
    student: {
      type: "many-to-one",
      target: "Student",
      joinColumn: { name: "student_id" },
      nullable: false,
    },
    subject: {
      type: "many-to-one",
      target: "Subject",
      joinColumn: { name: "subject_id" },
      nullable: false,
    },
  },
});