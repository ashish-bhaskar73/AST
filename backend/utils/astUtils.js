// server/utils/astUtils.js

// Parsing the rule string to AST representation
export function parseRuleToAST(ruleString) {
  // Simple parsing logic to convert the rule string to AST
  // You can improve this logic with more complex parsing if needed
  // For now, we just convert the rule into a structured object
  const root = {
    type: "operator",
    operator: "AND", // Example root operator
    left: {
      type: "operand",
      value: "age > 30",
    },
    right: {
      type: "operand",
      value: "salary > 50000",
    },
  };
  return root;
}

// Combine two ASTs
export function combineASTs(ast1, ast2) {
  return {
    type: "operator",
    operator: "AND",
    left: ast1,
    right: ast2,
  };
}

// Evaluate the AST against user data
export function evaluateAST(ast, data) {
  if (ast.type === "operand") {
    const condition = ast.value;
    const [field, operator, value] = condition.split(" ");
    const fieldValue = data[field];

    switch (operator) {
      case ">":
        return fieldValue > parseFloat(value);
      case "<":
        return fieldValue < parseFloat(value);
      case "=":
        return fieldValue == value;
      default:
        throw new Error("Unsupported operator");
    }
  }

  if (ast.type === "operator") {
    if (ast.operator === "AND") {
      return evaluateAST(ast.left, data) && evaluateAST(ast.right, data);
    }
    if (ast.operator === "OR") {
      return evaluateAST(ast.left, data) || evaluateAST(ast.right, data);
    }
  }

  return false;
}