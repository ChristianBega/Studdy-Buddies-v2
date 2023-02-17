import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "../../Styles/SubtopicPage.css";
import { InputLabel } from "@mui/material";
import ModalComponent from "./Modal";

const resourceMockData = [
  {
    resourceName: "Semantic HTML ",
    resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
    id: 1,
  },
  {
    resourceName: "Accessibility (ARIA)",
    resourceLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
    id: 2,
  },

  {
    resourceName: "HTML attributes",
    resourceLink: "https://developer.mozilla.org/en-US/docs/Glossary/Attribute",
    id: 3,
  },
];

export default function Resources() {
  const [resource, setResource] = useState();
  const handleChange = (event) => {
    setResource(event.target.value);
  };

  return (
    <div id="resources" className="subtopicBox subtopicResources">
      <ModalComponent  />
      <h3>Resources</h3>
      <FormControl variant="standard">
        <InputLabel id="resource">{resource || "Resources"}</InputLabel>
        <Select value="" labelId="resources" id="demo-simple-select-standard" onChange={handleChange}>
          {resourceMockData.map((resource) => (
            <MenuItem key={resource.id} value={resource.resourceName || ""}>
              <a href={resource.resourceLink} target="_blank" rel="noopener noreferrer">
                {resource.resourceName}
              </a>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
