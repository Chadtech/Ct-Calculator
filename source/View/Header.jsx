import { Component } from "React";
import React from "React";

// Actions
import * as Actions from "../Actions/Header";


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      handleMouseDown,
      handleMouseUp,
      handleMouseMove,
      close
    } = this.props;

    return (
      <div 
        className="header"
        onMouseDown={ handleMouseDown }
        onMouseUp={ handleMouseUp }
        onMouseMove={ handleMouseMove }
      >
        <p> Calculator </p>
        <div 
          className="button close"
          onClick={ close }
        >
          <p> x </p>
        </div>
      </div>
    );
  }
}