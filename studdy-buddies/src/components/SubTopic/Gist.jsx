import ModalComponent from "./Modal";

import React, { useState } from "react";

export default function Gist() {
  // Acts as a readme file generator - user can type in a "gist" and then they are able to print out a readme
  const [userInput, setUserInput] = useState("");
  // console.log(userInput);
  return (
    <div id="gist" className="subtopicBox subtopicGist">
      <ModalComponent setUserInput={setUserInput} />
      <div className="gistCard">
        <h3>{userInput.title ? userInput.title : "Title"}</h3>
        {/* <p>Title **Required</p> */}
        <p>{userInput.description ? userInput.description : "Enter a description here ..."}</p>
        <code>{userInput.gist ? userInput.gist : "Enter a code demo here..."}</code>
      </div>
    </div>
  );
}
