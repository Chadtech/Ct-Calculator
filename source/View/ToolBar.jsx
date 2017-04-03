import { Component } from "React";
import React from "React";


export default class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var calculatorTask;

    if (this.props.showCalculator) {
      calculatorTask =         
        <div className="button tool-bar-item">
          <p> Calculator </p>
        </div>
    } else {
      calculatorTask = <span/>
    }

    return (
      <div className="tool-bar">
        <div className="button start">
          <p> Start </p>
        </div>
        { calculatorTask }
        <div className="button tool-bar-item out">
          <p> Chrome </p>
        </div>
        <div className="button tool-bar-item clock">
          <p> 2017/04/XX XX:XX</p>
        </div>
      </div>
    )
  }
}