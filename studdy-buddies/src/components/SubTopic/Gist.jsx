import React from "react";
import Add from "./Add";

export default function Gist() {
  // Acts as a readme file generator - user can type in a "gist" and then they are able to print out a readme
  return (
    <div className="subtopicBox subtopicGist">
      <div className="gistCard">
        <h3>Title **Required</h3>
        <Add />
        {/* <p>Title **Required</p> */}
        <p>Description/Summary **Required</p>
        <code>Code examples here... **Required</code>
      </div>
    </div>
  );
}
