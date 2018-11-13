import React from "react";
import "./CardSummary.css";

const CardSummary = props => {
  const { avatar, name, bio } = props;
  return (
    <div className="card">
      <div>
        <img alt="employee-avatar" src={avatar} />
      </div>
      <div>
        <h3 className="employee-name">{name}</h3>
        <div className="concise-bio">{bio}</div>
      </div>
    </div>
  );
};

export default CardSummary;
