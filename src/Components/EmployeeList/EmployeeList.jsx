import React from "react";
import CardSummary from "../CardSummary/CardSummary.jsx";
import "./EmployeeList.css";
const EmployeeList = props => {
  let employees = props.employeeList;
  return (
    <div>
      <div className="grid">
        {employees.map(employee => (
          <CardSummary employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
