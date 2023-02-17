import ModalComponent from "./Modal";

import React, { useState } from "react";

export default function Gist() {
  // Acts as a readme file generator - user can type in a "gist" and then they are able to print out a readme
  const [userInput, setUserInput] = useState([{ title: "Title", description: "Description", codeExamples: "" }]);
  console.log(userInput);
  return (
    <div id="gist" className="subtopicBox subtopicGist">
      <ModalComponent setUserInput={setUserInput} />
      <div className="gistCard">
        <h3>Title **Required</h3>
        {/* <p>Title **Required</p> */}
        <p>Description/Summary **Required</p>
        <code>Code examples here... **Required</code>
      </div>
    </div>
  );
}
