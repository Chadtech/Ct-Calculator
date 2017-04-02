import { Component } from "React";
import React from "React"
import ReactDOM from "react-dom";

import * as Field from "./Actions/Field";


class App extends Component {
  constructor(props) {
    super(props);
    this.handleField = Field.handle.bind(this);

    this.state = {field: "Type stuff hell yeah"};
  }

  render() {
    return (
      <div className="card middle">
        <input
          className="field"
          value={this.state.field}
          onChange={this.handleField}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));