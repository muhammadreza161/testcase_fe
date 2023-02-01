import React, { Fragment } from "react";

class AddEmployee extends React.Component {
  state = {
    disabled: true,
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  render() {
    return (
      <Fragment>  
        <td className="pl-30">
          <input data-testid="new-employee-name-input" onChange={this.handleChange} placeholder="Enter Name" />
        </td>
        <td className="pl-20">
          <input data-testid="new-employee-position-input" onChange={this.handleChange} placeholder="Enter Position" />
        </td>
        <td className="pl-20">
          <input data-testid="new-employee-salary-input" type="number" onChange={this.handleChange} placeholder="Enter Salary" />
        </td>
        <td className="pl-20">
          <button data-testid="add-new-employee-button" className="x-small w-75 ma-0 px-25" disabled={this.state.disabled}>         
            Add
          </button>
        </td>
      </Fragment>
     
    );
  }
}

export default AddEmployee;
