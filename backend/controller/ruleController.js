import Rule from "../models/Rule.js";
import { ruleSchema, evaluateSchema } from "../validation/ruleValidation.js";
import { parseRuleToAST, evaluateAST, combineASTs } from "../utils/astUtils.js";

// Create rule and store it in the database
const createRule = async (req, res) => {
  try {
    const { ruleString } = req.body;

    // Parse the rule string to AST
    const ast = parseRuleToAST(ruleString);

    // Validate rule input with Zod schema
    const validationResult = ruleSchema.safeParse({ ruleString, ast });
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error.errors });
    }

    // Save rule and AST in the database
    const newRule = await Rule.create({ ruleString, ast });

    res.status(201).json(newRule);
  } catch (error) {
    console.error("Error creating rule:", error);
    res.status(500).json({ error: "Error creating rule" });
  }
};

// Combine multiple rules into a single AST
const combineRules = async (req, res) => {
  try {
    const { rules } = req.body; // Array of rule strings

    // Ensure we have at least two rules to combine
    if (!rules || rules.length < 2) {
      return res
        .status(400)
        .json({ error: "You need at least two rules to combine" });
    }

    // Initialize the combined AST with the first rule
    let combinedAST = parseRuleToAST(rules[0]);

    // Iterate through the remaining rules and combine their ASTs
    for (let i = 1; i < rules.length; i++) {
      const ast = parseRuleToAST(rules[i]);

      // Combine the current combined AST with the new AST
      combinedAST = combineASTs(combinedAST, ast);
    }

    res.status(200).json({ combinedAST });
  } catch (error) {
    console.error("Error combining rules:", error);
    res.status(500).json({ error: "Error combining rules" });
  }
};

// Evaluate a rule (AST) against user data
const evaluateRule = async (req, res) => {
  try {
    const { ast, data } = req.body; // AST and user data

    // Validate the incoming data to ensure it contains necessary fields
    const validationResult = ruleSchema.safeParse({ ast, data });
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error.errors });
    }

    // Evaluate the AST against the provided data
    const result = evaluateAST(ast, data);

    res.status(200).json({ result });
  } catch (error) {
    console.error("Error evaluating rule:", error);
    res.status(500).json({ error: "Error evaluating rule" });
  }
};

export { createRule, combineRules, evaluateRule };
