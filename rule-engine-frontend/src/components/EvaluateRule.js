// src/components/EvaluateRule.js
import React, { useState } from "react";
import axios from "axios";
import '../styles.css';

const EvaluateRule = () => {
  const [ast, setAST] = useState(null);
  const [data, setData] = useState({
    age: "",
    department: "",
    salary: "",
    experience: "",
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/rules/evaluate_rule",
        {
          ast,
          data,
        }
      );
      setResult(response.data.result);
    } catch (error) {
      console.error("Error evaluating rule", error);
    }
  };

  return (
    <div className="rule-section">
      <h2>Evaluate Rule</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="AST (combined rule in JSON format)"
          onChange={(e) => setAST(JSON.parse(e.target.value))}
          required
        ></textarea>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="department"
          value={data.department}
          onChange={handleInputChange}
          placeholder="Department"
        />
        <input
          type="number"
          name="salary"
          value={data.salary}
          onChange={handleInputChange}
          placeholder="Salary"
        />
        <input
          type="number"
          name="experience"
          value={data.experience}
          onChange={handleInputChange}
          placeholder="Experience"
        />
        <button type="submit">Evaluate</button>
      </form>
      {result !== null && (
        <div className="response">
          Evaluation Result: {result ? "True" : "False"}
        </div>
      )}
    </div>
  );
};

export default EvaluateRule;
