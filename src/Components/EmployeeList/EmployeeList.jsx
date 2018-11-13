import React from "react";
import CardSummary from "../CardSummary/CardSummary.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./EmployeeList.css";
class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorting: "first",
      searchFilter: ""
    };
  }

  updateSorting = event => {
    this.setState({ sorting: event.target.value });
  };
  updateFilter = event => {
    this.setState({ searchFilter: event.target.value });
  };

  render() {
    const employees = this.props.employeeList;
    const { sorting, searchFilter } = this.state;
    return (
      <div>
        <SearchBar
          updateSorting={this.updateSorting}
          updateFilter={this.updateFilter}
        />
        <div className="grid">
          {employees
            .filter(employee =>
              searchFilter
                ? employee.firstName
                    .toLowerCase()
                    .startsWith(searchFilter.toLowerCase()) ||
                  employee.lastName
                    .toLowerCase()
                    .startsWith(searchFilter.toLowerCase())
                : true
            )
            .sort((e1, e2) =>
              sorting === "first"
                ? e1.firstName.toLowerCase() < e2.firstName.toLowerCase()
                  ? -1
                  : 1
                : e1.lastName.toLowerCase() < e2.lastName.toLowerCase()
                ? -1
                : 1
            )
            .map(employee => (
              <CardSummary
                key={employee.id}
                avatar={employee.avatar}
                name={`${employee.firstName} ${employee.lastName}`}
                bio={employee.bio}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default EmployeeList;
