import React from "react";
import "./CardSummary.css";

const CardSummary = props => {
  let { employee } = props;
  return (
    <div className="card">
      <div>
        <img alt="employee-avatar" src={employee.avatar} />
      </div>
      <div>
        <h1>{employee.firstName}</h1>
      </div>
    </div>
  );
};

export default CardSummary;
