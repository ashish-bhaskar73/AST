// server/routes/ruleRoutes.js
import express from "express"; // Import express using ES Module syntax
import {
  createRule,
  combineRules,
  evaluateRule,
} from "../controller/ruleController.js"; 

const router = express.Router();

// API to create rule (should be POST)
router.post("/create_rule", createRule);

// API to combine rules
router.post("/combine_rules", combineRules);

// API to evaluate rule
router.post("/evaluate_rule", evaluateRule);

export default router; // Export the router
