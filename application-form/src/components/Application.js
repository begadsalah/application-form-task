import React from "react";
import "./Application.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MultiSelection } from "./MultiSelection.js";
import "reactjs-popup/dist/index.css";
import ControlledPopup from "./ControlledPopUp.js";
import ControlledPopup2 from "./ControlledPopup2.js";
import ControlledPopup3 from "./ControlledPopup3.js";
import { MultiSelection2 } from "./MultiSelection2.js";
import CompanyName from "./CompanyName.js";

function Application() {
  return (
    <div className="application-page">
      <div className="application-heading">
        <Link to="/">
          <button className="back-button">
            <ArrowBackIosIcon fontSize="large" />
          </button>
        </Link>
        <h1 className="application-title"> Company Info </h1>
      </div>
      <div className="application-form">
        <form className="application-form-inputs">
          <ul>
            <div className="ease-inputs">
              <li>
                <fieldset>
                  <lable> First name </lable>
                  <input
                    className="ease-input"
                    type="text"
                    placeholder="first name"
                    onKeyDown={(e) =>
                      /^[0-9]/.test(e.key) && e.preventDefault()
                    }
                    required
                  ></input>
                </fieldset>
              </li>
              <li>
                <fieldset>
                  <lable> Last name </lable>
                  <input
                    className="ease-input"
                    type="text"
                    placeholder="last name"
                    onKeyDown={(e) =>
                      /^[0-9]/.test(e.key) && e.preventDefault()
                    }
                    required
                  ></input>
                </fieldset>
              </li>
              <li>
                <fieldset>
                  <lable> Email </lable>
                  <input
                    className="ease-input"
                    type="text"
                    placeholder="email address"
                    required
                  ></input>
                </fieldset>
              </li>
            </div>
            <li>
              <fieldset>
                <lable> Phone number </lable>{" "}
                <PhoneInput country={"us"} required />
              </fieldset>
            </li>
            <div className="explanation-fields">
              <li>
                <fieldset>
                  <lable> Operation Countries </lable>{" "}
                  <MultiSelection required />
                  <ControlledPopup />
                </fieldset>
              </li>
              <li>
                <fieldset>
                  <lable> Company Name </lable>
                  <CompanyName status="true" />
                  <ControlledPopup2 />
                </fieldset>
              </li>
            </div>
            <li>
              <fieldset>
                <lable> Objective </lable> <MultiSelection2 required />
              </fieldset>
            </li>
            <li>
              <fieldset>
                <lable> Description</lable>
                <textarea className="textarea" required>
                  This is simple textarea
                </textarea>
              </fieldset>
            </li>
            <li>
              <fieldset>
                <ControlledPopup3 />
              </fieldset>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Application;
