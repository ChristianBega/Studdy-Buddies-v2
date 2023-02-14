import React from "react";
import { InputUnstyled, ButtonUnstyled } from "@mui/base";
import "../../Styles/Form.css";

export default function SubtopicsForm({ formType }) {
  return (
    <div>
      {/* {formType} */}
      {formType === "description" ? (
        <InputUnstyled className="textFields" type="email" placeholder="Enter description here..." />
      ) : formType === "codeDemo" ? (
        <InputUnstyled className="textFields" type="email" placeholder="Enter code demo here..." />
      ) : (
        <InputUnstyled className="textFields" type="email" placeholder="Enter gist here..." />
      )}
    </div>
  );
}
