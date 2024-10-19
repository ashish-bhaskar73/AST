// server/db.js
import Sequelize from "sequelize";

import dotenv from "dotenv";

dotenv.config();

// MySQL connection using Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

sequelize
  .sync({ force: false })
  .then(() => console.log("Models synced with the database"))
  .catch((err) => console.error("Failed to sync models:", err));

export default sequelize;
