import React, { useEffect, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "../../Styles/SubtopicPage.css";
import { InputLabel } from "@mui/material";
import ModalComponent from "./Modal";

let resourceMockData = [
  {
    resourceTitle: "Semantic HTML ",
    resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
  },
  {
    resourceTitle: "Accessibility (ARIA)",
    resourceLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
  },

  {
    resourceTitle: "HTML attributes",
    resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Attribute",
  },
];

export default function Resources() {
  const [userInput, setUserInput] = useState();
  const [resource, setResource] = useState();

  const handleChange = (event) => {
    setResource(event.target.value);
  };

  // useEffect(() => {
  //   console.log(userInput);
  //   resourceMockData.push(userInput);
  // }, [userInput]);

  // I'm able to get back a userInput object = {resourceTitle : "", resourceLink : ""}
  // When a new userInput is submitted I want to take that input and update the resourceMockData and rerender a new menuItem

  return (
    <div  id="resources" className="subtopicBox subtopicResources">
      <ModalComponent setUserInput={setUserInput} />
      <h3>Resources</h3>
      <FormControl variant="standard">
        <InputLabel id="resource">{resource ? resource : "Resources"}</InputLabel>
        <Select value="" labelId="resources" id="demo-simple-select-standard" onChange={handleChange}>
          {resourceMockData.map((resource, index) => (
            <MenuItem sx={{ color: "red !important" }} key={index + 1} value={resource ? resource.resourceTitle : "Resources"}>
              <a className="test" href={resource.resourceLink} target="_blank" rel="noopener noreferrer">
                {resource.resourceTitle}
              </a>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
