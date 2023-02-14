import React from "react";
import Add from "./Add";

export default function CodeDemo() {
  return (
    <div className="subtopicBox subtopicCodeDemo">
      <h3>Code Demo</h3>
      {/* <button onClick={handleSubmit}>Add</button> */}
      <Add />
      <code>Enter your code example here...</code>
    </div>
  );
}
