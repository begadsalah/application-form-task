import React, { Component } from "react";
import Select from "react-select";
import "./MultiSelection.css";

export const CompanyName = [
  {
    label: "Complaint",
    value: "Complaint",
  },
];

export const MultiSelection3 = () => (
  <Select options={CompanyName} isMulti className="Options-selections" />
);
