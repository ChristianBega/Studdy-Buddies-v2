import ModalComponent from "./Modal";

import React, { useState } from "react";

export default function Gist() {
  const [isHovered, setIsHovered] = useState(false);

  // Acts as a readme file generator - user can type in a "gist" and then they are able to print out a readme
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="subtopicBox subtopicGist">
      {isHovered ? (
        <ModalComponent isHovered={isHovered} />
      ) : (
        <div id="gist" className="gistCard">
          <h3>Title **Required</h3>

          {/* <p>Title **Required</p> */}
          <p>Description/Summary **Required</p>
          <code>Code examples here... **Required</code>
        </div>
      )}
    </div>
  );
}
