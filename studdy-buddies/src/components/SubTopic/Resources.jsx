// import { OptionUnstyled, SelectUnstyled } from "@mui/base";
import { OptionUnstyled, SelectUnstyled } from "@mui/base";
import React from "react";

export default function Resources() {
  return (
    <div className="subtopicBox subtopicResources">
      {/* <label for="resources">Resources</label>
       */}
      <h3>Resources</h3>
      <SelectUnstyled defaultValue={10}>
        <OptionUnstyled value={25} />
      
      </SelectUnstyled>
    </div>
  );
}
