import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="search-title">Our employees</div>
      <div className="search-filter">
        {`Sort by : `}
        <select onChange={props.updateSorting}>
          <option value="first">First Name</option>
          <option value="last">Last Name</option>
        </select>
        {` Search `} <input onChange={props.updateFilter} type="text" />
      </div>
    </div>
  );
};

export default SearchBar;
