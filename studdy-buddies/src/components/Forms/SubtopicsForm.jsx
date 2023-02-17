import React, { useState } from "react";
import { InputUnstyled } from "@mui/base";
import "../../Styles/Form.css";

export default function SubtopicsForm({ formType, setUserInput }) {
  const [formState, setFormState] = useState("" || [{ title: "Title", description: "Description", codeExamples: "" }]);
  const handleChange = (event) => {
    const userInput = event.target.value;
    setFormState(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formType === "description" ? (
        <InputUnstyled onChange={handleChange} className="textFields" type="text" placeholder="Enter description here..." />
      ) : formType === "codeDemo" ? (
        <InputUnstyled onChange={handleChange} className="textFields" type="text" placeholder="Enter code demo here..." />
      ) : formType === "gist" ? (
        <>
          <InputUnstyled onChange={handleChange} className="textFields" type="text" placeholder="Enter gist title here..." />
          <InputUnstyled onChange={handleChange} className="textFields" type="text" placeholder="Enter gist here..." />
        </>
      ) : formType === "resources" ? (
        <InputUnstyled onChange={handleChange} className="textFields" type="text" placeholder="Enter your resources..." />
      ) : null}
      <button>Submit</button>
    </form>
  );
}
