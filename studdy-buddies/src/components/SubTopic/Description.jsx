import React, { useState } from "react";
import ModalComponent from "./Modal";

export default function Description() {
  const [userInput, setUserInput] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aut necessitatibus eveniet libero distinctio animi ipsum modi sed ducimu placeat doloribus fuga nemo molestiae magni."
  );

  return (
    <div id="description" className="subtopicBox subtopicDescription">
      <ModalComponent setUserInput={setUserInput} />
      <h3>Description</h3>

      <p>{userInput}</p>
    </div>
  );
}
