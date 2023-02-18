import React, { useState } from "react";
import { InputUnstyled } from "@mui/base";
import "../../Styles/Form.css";

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
    <form onSubmit={handleSubmit}>
      {formType === "description" ? (
        <InputUnstyled onChange={handleChange} name="description" className="textFields" type="text" placeholder="Enter description here..." />
      ) : formType === "codeDemo" ? (
        <InputUnstyled onChange={handleChange} name="codeDemo" className="textFields" type="text" placeholder="Enter code demo here..." />
      ) : formType === "gist" ? (
        <>
          <InputUnstyled onChange={handleChange} name="title" className="textFields" type="text" placeholder="Enter gist title here..." />
          <InputUnstyled onChange={handleChange} name="description" className="textFields" type="text" placeholder="Enter gist here..." />
          <InputUnstyled onChange={handleChange} name="gist" className="textFields" type="text" placeholder="Enter gist here..." />
        </>
      ) : formType === "resources" ? (
        <>
          <InputUnstyled onChange={handleChange} name="resourceTitle" className="textFields" type="text" placeholder="Enter your resources title..." />
          <InputUnstyled onChange={handleChange} name="resourceLink" className="textFields" type="text" placeholder="Enter your resources link..." />
        </>
      ) : null}
      <button>Submit</button>
    </form>
  );
}
