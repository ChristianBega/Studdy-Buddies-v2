import ModalComponent from "./Modal";
import React, { useState } from "react";

export default function CodeDemo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} id="codeDemo" className="subtopicBox subtopicCodeDemo">
      {isHovered ? (
        <ModalComponent isHovered={isHovered} />
      ) : (
        <>
          <h3>Code Demo</h3>
          <code>Enter your code example here...</code>
        </>
      )}
    </div>
  );
}
