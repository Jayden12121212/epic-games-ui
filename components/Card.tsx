import React, { useState } from "react";
import "./Card.module.scss";

const Card = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={handleCardClick}
    >
      {isExpanded ? (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Embedded Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="card-content">
          <h3>Card Title</h3>
          <p>Card Description</p>
        </div>
      )}
    </div>
  );
};

export default Card;
