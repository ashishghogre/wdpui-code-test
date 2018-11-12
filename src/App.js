import React, { Component } from "react";
import SampleData from "./sample-data.json";
import Header from "./Components/Header/Header.jsx";
import EmployeeList from "./Components/EmployeeList/EmployeeList.jsx";

class App extends Component {
  render() {
    let { companyInfo, employees } = SampleData;
    return (
      <div>
        <Header companyInfo={companyInfo} />
        <EmployeeList employeeList={employees} />
      </div>
    );
  }
}

export default App;
