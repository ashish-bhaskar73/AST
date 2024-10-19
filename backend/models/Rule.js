import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Rule = sequelize.define(
  "Rule",
  {
    ruleString: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ast: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Rule;
