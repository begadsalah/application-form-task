import React, { useState } from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Popup from "reactjs-popup";
import "./ControlledPopUp.css";
//

const ControlledPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button
        type="button"
        className="button info-button info-button-position"
        onClick={() => setOpen((o) => !o)}
      >
        <InfoOutlinedIcon />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal" className="popup-widnow">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <span className="content">
            You could select more than one country
          </span>
        </div>
      </Popup>
    </div>
  );
};
export default ControlledPopup;
