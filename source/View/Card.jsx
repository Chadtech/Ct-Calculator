import { Component } from "React";
import React from "React";


export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x, y } = this.props.position;

    return (
      <div
        className="card middle"
        style={{
          top: y + "px",
          left: x + "px"
        }}
      >
        { this.props.children }
      </div>
    );
  }
}