// src/components/CombineRules.js
import React, { useState } from "react";
import axios from "axios";
import '../styles.css';

const CombineRules = () => {
  const [rules, setRules] = useState([""]);
  const [combinedAST, setCombinedAST] = useState(null);

  const handleChange = (e, index) => {
    const updatedRules = [...rules];
    updatedRules[index] = e.target.value;
    setRules(updatedRules);
  };

  const addRuleField = () => setRules([...rules, ""]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/rules/combine_rules",
        { rules }
      );
      setCombinedAST(result.data.combinedAST);
    } catch (error) {
      console.error("Error combining rules", error);
    }
  };

  return (
    <div className="rule-section">
      <h2>Combine Rules</h2>
      <form onSubmit={handleSubmit}>
        {rules.map((rule, index) => (
          <input
            key={index}
            type="text"
            value={rule}
            onChange={(e) => handleChange(e, index)}
            placeholder={`Enter rule ${index + 1}`}
            required
          />
        ))}
        <button
          className="add-rule-button"
          type="button"
          onClick={addRuleField}
        >
          Add Another Rule
        </button>
        <button type="submit">Combine Rules</button>
      </form>
      {combinedAST && (
        <div className="response">
          Combined AST: {JSON.stringify(combinedAST)}
        </div>
      )}
    </div>
  );
};

export default CombineRules;
