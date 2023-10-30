import React, { useState } from "react";

const Form = ({ setUsername }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter GitHub Username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
