import React from "react";

export default function Add() {
  const handleSubmit = (e) => {
    console.log(e.target.parentElement.className);
  };
  return <button onClick={(e) => handleSubmit(e)}>Add</button>;
}
