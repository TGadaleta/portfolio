import React from "react";
import "../styling/styles.css";

const BattleshipPage = () => {
  return (
    <>
      <div className="header">
        <h1>Battleship</h1>
        <h4>Written 10/24 with HTML, CSS, and Javascript</h4>
      </div>
      <div className="project-container">
        <a
          href="https://tony-gadaleta-battleship.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../battleship.png"
            alt="battleship"
            style={{ width: "700px", height: "auto" }}
          />
        </a>
        <div className="message-container">
          <h4>
            Face off against the computer and try to sink their ships first!
          </h4>
          <h4>Click the image above to play the game!</h4>
        </div>
        <a
          href="https://github.com/TGadaleta/Battleship"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </div>
    </>
  );
};

export default BattleshipPage;
