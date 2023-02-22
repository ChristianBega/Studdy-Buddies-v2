const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SubtopicStatus extends Model {}

SubtopicStatus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    subtopic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "subtopic",
        key: "id",
      },
    },
    status: {
      // 1 = known, 2= neutral (default), 3= unknown
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "subtopicStatus",
  }
);

module.exports = SubtopicStatus;
