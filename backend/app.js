// server/app.js
import express from "express";
import cors from "cors"; // Import CORS package
import bodyParser from "body-parser";
import ruleRoutes from "./routes/ruleRoutes.js";
import sequelize from "./config/db.js";

const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(bodyParser.json());
app.use("/rules", ruleRoutes);

// Sync with database
sequelize.sync().then(() => {
  console.log("Database synced");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
