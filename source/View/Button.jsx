import { Component } from "React";
import React from "React";


export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, handleClick } = this.props;

    return (
      <div
        className="button"
        onClick={handleClick}
      >
        <p> { label } </p>
      </div>
    );
  }
}