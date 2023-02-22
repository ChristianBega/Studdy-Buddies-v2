const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Subtopic extends Model {}

Subtopic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subtopic_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    code_examples: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    demo_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resources: {
      // DataTypes.JSON
      type: DataTypes.JSON,
      allowNull: true,
    },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "topic",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "subtopic",
  }
);

module.exports = Subtopic;
