import React, { useState } from "react";
import ModalComponent from "./Modal";

export default function Description() {
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);
  return (
    <div
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      id="description"
      className="subtopicBox subtopicDescription"
    >
      {isHovered ? (
        <ModalComponent isHovered={isHovered} />
      ) : (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aut necessitatibus eveniet libero distinctio animi ipsum modi sed ducimus,
          placeat doloribus fuga nemo molestiae magni.
        </p>
      )}
    </div>
  );
}
