import React from "react";
import "./Header.css";

const Header = props => {
  const { companyName, companyMotto, companyEst } = props;
  return (
    <div className="header">
      <h1 className="company-title">{companyName}</h1>
      <div className="company-details-display">
        <h4 className="company-motto company-details">{companyMotto}</h4>
        <h4 className="company-since company-details">Since {companyEst}</h4>
      </div>
    </div>
  );
};

export default Header;
