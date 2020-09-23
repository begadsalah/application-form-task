import EditableList from "react-list-editable";
import "react-list-editable/lib/react-list-editable.css";
import React, { Component } from "react";
import { MultiSelection } from "./MultiSelection.js";
import "./CompanyName.css";

export default class CompanyName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Compnay1", "Company2", "Company3"],
    };
  }

  onListChange(newList) {
    this.setState({
      list: newList,
    });
  }

  render() {
    if (MultiSelection) {
      return (
        <div className="companyName-input">
          <EditableList
            list={this.state.list}
            onListChange={this.onListChange.bind(this)}
            placeholder="Enter your company name"
            className="companyName-active"
          />
        </div>
      );
    } else {
      return (
        <div className="companyName-input">
          <input type="text" className="compnayName-disabled" disabled></input>
        </div>
      );
    }
  }
}
