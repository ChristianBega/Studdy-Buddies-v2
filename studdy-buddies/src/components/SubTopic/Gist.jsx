import ModalComponent from "./Modal";

import React from "react";

export default function Gist() {
  // Acts as a readme file generator - user can type in a "gist" and then they are able to print out a readme
  return (
    <div className="subtopicBox subtopicGist">
      <div id="gist" className="gistCard">
        <h3>Title **Required</h3>
        <ModalComponent />

        {/* <p>Title **Required</p> */}
        <p>Description/Summary **Required</p>
        <code>Code examples here... **Required</code>
      </div>
    </div>
  );
}
