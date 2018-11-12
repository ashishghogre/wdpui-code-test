import React, { Component } from "react";
import SampleData from "./sample-data.json";
import Header from "./Components/Header/Header.jsx";

class App extends Component {
  render() {
    let { companyInfo, employees } = SampleData;
    return (
      <div>
        <Header companyInfo={companyInfo} />        
      </div>
    );
  }
}

export default App;
