// src/components/CreateRule.js
import React, { useState } from "react";
import axios from "axios";
import "../"

const CreateRule = () => {
  const [ruleString, setRuleString] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/rules/create_rule",
        { ruleString }
      );
      setResponse(result.data);
    } catch (error) {
      console.error("Error creating rule", error);
      setResponse(error.response?.data || "Error");
    }
  };

  return (
    <div className="rule-section">
      <h2>Create Rule</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Enter rule string"
          required
        />
        <button type="submit">Create Rule</button>
      </form>
      {response && (
        <div className="response">Response: {JSON.stringify(response)}</div>
      )}
    </div>
  );
};

export default CreateRule;
