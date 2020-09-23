import React from "react";
import "./LeadPage.css";
import ReactPlayer from "react-player";
import { BrowserRouter, Route, Link } from "react-router-dom";

function LeadPage() {
  return (
    <div className="lead-page">
      <div className="leftSide">
        <h1 class="home-title">
          <span> You could request an appointment </span>
          <span> with our team </span>
        </h1>
        <Link to="/Application">
          <div className="leadPage-divButton">
            <button className="leadPage-button">Request an Appointment</button>
          </div>
        </Link>
      </div>
      <div className="rightSide">
        <ReactPlayer
          className="leadPage-video"
          url="https://youtu.be/r3fE6FQT82s"
          playing={true}
          controls
          autoPlay
          muted
          width="450px"
          height="300px"
        />
      </div>
    </div>
  );
}

export default LeadPage;
