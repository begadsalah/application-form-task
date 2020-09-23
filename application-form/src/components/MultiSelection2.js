import React, { Component } from "react";
import Select from "react-select";
import "./MultiSelection.css";

export const objective = [
  {
    label: "Complaint",
    value: "Complaint",
  },
  {
    label: "Suggestion",
    value: "Suggestion",
  },
];

export const MultiSelection2 = () => (
  <Select options={objective} isMulti className="Options-selections" />
);
