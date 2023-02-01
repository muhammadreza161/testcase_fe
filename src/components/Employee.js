import React, { Fragment } from "react";

class Employee extends React.Component {
  state = {
    disabled: true,
  };
  handleChange = (e) => {
    if (e.target.value.length > 1) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  render(idx) {
    return (
      <Fragment>
        <td className="pl-10">
          <button className={"x-small w-75 ma-0 px-25"} data-testid={"employee-save-button-" + idx} disabled={this.state.disabled}>
            Save
          </button>
        </td>
      </Fragment>
    );
  }
}

export default Employee;
