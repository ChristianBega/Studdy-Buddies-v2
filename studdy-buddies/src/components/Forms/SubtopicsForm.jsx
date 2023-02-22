import React, { useState } from "react";
import { InputUnstyled } from "@mui/base";
import Typography from "@mui/material/Typography";

export default function SubtopicsForm({ formType, setUserInput }) {
  const [formState, setFormState] = useState("");
  const handleChange = (event) => {
    const userInput = event.target.value;
    if (formType === "gist" || formType === "resources") {
      const { name, value } = event.target;
      setFormState({ ...formState, [name]: value });
    } else {
      setFormState(userInput);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput(formState);
  };

  return (
    <form className="modalForm" onSubmit={handleSubmit}>
      {formType === "description" ? (
        <>
          <Typography mb={4} id="modal-modal-title" variant="h4" component="h2">
            Add a description
          </Typography>
          <InputUnstyled onChange={handleChange} name="description" className="textFields" type="text" placeholder="Enter description here..." />
        </>
      ) : formType === "codeDemo" ? (
        <>
          <Typography mb={4} id="modal-modal-title" variant="h4" component="h2">
            Add a code demo
          </Typography>
          <InputUnstyled onChange={handleChange} name="codeDemo" className="textFields" type="text" placeholder="Enter code demo here..." />
        </>
      ) : formType === "gist" ? (
        <>
          <Typography mb={4} id="modal-modal-title" variant="h4" component="h2">
            Add a gist
          </Typography>
          <InputUnstyled
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
            name="title"
            className="textFields"
            type="text"
            placeholder="Enter gist title here..."
          />
          <InputUnstyled
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
            name="description"
            className="textFields"
            type="text"
            placeholder="Enter gist here..."
          />
          <InputUnstyled
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
            name="gist"
            className="textFields"
            type="text"
            placeholder="Enter gist here..."
          />
        </>
      ) : formType === "resources" ? (
        <>
          <Typography mb={4} id="modal-modal-title" variant="h4" component="h2">
            Add a resource
          </Typography>
          <InputUnstyled
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
            name="resourceTitle"
            className="textFields"
            type="text"
            placeholder="Enter your resources title..."
          />

          <InputUnstyled
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
            name="resourceLink"
            className="textFields"
            type="text"
            placeholder="Enter your resources link..."
          />
          <p style={{ marginTop: "1rem" }}>Working, just need to figure out how to add new user inputs to resources select drop down</p>
        </>
      ) : null}
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button>Submit</button>
      </div>
    </form>
  );
}
