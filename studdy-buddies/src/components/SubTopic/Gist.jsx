import React from "react";

export default function Gist() {
  // Acts as a readme file generator - user can type in a "gist" and then they are able to print out a readme
  return (
    <div className="subtopicBox subtopicGist">
      <h3>Gists about "subtopic"</h3>
      <p>Title **Required</p>
      <p>Description/Summary **Required</p>
      <code>Code examples here...</code>
    </div>
  );
}
