import React, { useState } from "react";
import Popup from "reactjs-popup";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ControlledPopUp.css";
//

const ControlledPopup3 = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button
        type="button"
        className="button info-button reqApp"
        onClick={() => setOpen((o) => !o)}
      >
        Request an Appointment
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal" className="popup-widnow">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <span className="content">Confirm your request</span>
          <Link to="/confirmation">
            <button className="reqApp"> Request </button>
          </Link>
        </div>
      </Popup>
    </div>
  );
};
export default ControlledPopup3;
