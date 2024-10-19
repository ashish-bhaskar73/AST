// server/validation/ruleValidation.js
import { z } from "zod";

// Zod schema for rule validation (for rule creation)
const ruleSchema = z.object({
  ruleString: z.string().min(1, "Rule string cannot be empty"),
  ast: z.any(),
});

// Zod schema for evaluating rules (doesn't require ruleString)
const evaluateSchema = z.object({
  ast: z.any(),
  data: z.object({
    age: z.number().optional(),
    department: z.string().optional(),
    salary: z.number().optional(),
    experience: z.number().optional(),
  }),
});

export { ruleSchema, evaluateSchema };
