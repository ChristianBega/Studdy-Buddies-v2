import React from "react";

export default function Resources() {
  return (
    <div className="subtopicBox subtopicResources">
      {/* <label for="resources">Resources</label>
       */}
      <h3>Resources</h3>
      <select name="resources" id="resources">
        <option value="resource1">Resource1</option>
        <option value="resource2">Resource2</option>
        <option value="resource3">Resource3</option>
        <option value="resource4">Resource4</option>
      </select>
    </div>
  );
}
