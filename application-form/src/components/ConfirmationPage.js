import React from "react";
import "./ConfirmationPage.css";
import { Link } from "react-router-dom";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

function ConfirmationPage() {
  return (
    <div className="confirmation-page">
      <h2 className="confirmationPage-title">
        Your request is received and someone will be in touch with you soon
      </h2>
      <CheckCircleOutlineRoundedIcon fontSize="large" className="confirmed" />
      <Link to="/">
        <button className="confirmationPage-button"> Back to home page </button>
      </Link>
    </div>
  );
}

export default ConfirmationPage;
