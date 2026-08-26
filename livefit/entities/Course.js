const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Course",
  tableName: "COURSE",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid"
    },
    name: {
      type: "varchar",
      length: 100,
      nullable: false
    },
    description: {
      type: "text",
      nullable: false
    },
    start_at: {
      type: "timestamp",
      nullable: false
    },
    end_at: {
      type: "timestamp",
      nullable: false
    },
    max_participants: {
      type: "integer",
      nullable: false
    },
    created_at: {
      type: "timestamp",
      createDate: true
    },
    updated_at: {
      type: "timestamp",
      updateDate: true
    },
    meeting_url: {
      type: "varchar",
      length: 2048,
      nullable: true,  // 原先資料表已有資料，新欄位必須允許為空
    },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      joinColumn: { name: "user_id" },
    },
    skill: {
      type: "many-to-one",
      target: "Skill",
      joinColumn: { name: "skill_id" },
    },
  },
});