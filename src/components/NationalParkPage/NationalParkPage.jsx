import React from "react";
import "../styling/styles.css";

const NationalParkPage = () => {
  return (
    <>
      <div className="header">
        <h1>National Park Trip Planner</h1>
        <h4>Written 11/24 with EJS, CSS, Javascript, MongoDB and Node.</h4>
      </div>
      <div className="project-container">
        <a
          href="https://national-park-trip-planner-46d300a02e57.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../nationalparkplanner.png"
            alt="npp"
            style={{ width: "700px", height: "auto" }}
          />
        </a>
        <div className="message-container">
          <h4>Explore America's National Parks and plan your trip!</h4>
          <h4>Click the image above to view the app!</h4>
        </div>
        <a
          href="https://github.com/TGadaleta/NationalParkPlanner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </div>
    </>
  );
};

export default NationalParkPage;
