import ModalComponent from "./Modal";
import React, { useState } from "react";

export default function CodeDemo() {
  const [userInput, setUserInput] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aut necessitatibus eveniet libero distinctio animi ipsum modi sed ducimu placeat doloribus fuga nemo molestiae magni."
  );
  return (
    <div id="codeDemo" className="subtopicBox subtopicCodeDemo">
      <ModalComponent setUserInput={setUserInput} />
      <h3>Code Demo</h3>
      <code>{userInput}</code>
    </div>
  );
}
