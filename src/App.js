import React, { Component } from "react";
import SampleData from "./sample-data.json";
import Header from "./Components/Header/Header.jsx";
import EmployeeList from "./Components/EmployeeList/EmployeeList.jsx";
import "./App.css";

class App extends Component {
  render() {
    const { companyInfo, employees } = SampleData;
    return (
      <div className="flex">
        <Header
          companyName={companyInfo.companyName}
          companyMotto={companyInfo.companyMotto}
          companyEst={companyInfo.companyEst}
        />
        <EmployeeList employeeList={employees} />
      </div>
    );
  }
}

export default App;
