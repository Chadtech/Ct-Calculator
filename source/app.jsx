import { Component } from "React";
import React from "React"
import ReactDOM from "react-dom";

// Actions
import * as Actions from "./Actions"

// Components
import Header from "./View/Header";
import Card from "./View/Card";
import Screen from "./View/Screen";
import Buttons from "./View/Buttons";
import ToolBar from "./View/ToolBar";

// State
import * as Init from "./Init";


class App extends Component {
  constructor(props) {
    super(props);
    
    Actions.set(this);
    this.state = Init.state;
  }

  render() {
    const { cardPosition, screen, showCalculator } = this.state;

    var calculator;

    if (this.state.showCalculator) {
      calculator = 
        <Card position={cardPosition}>
          <Header 
            handleMouseDown={ this.headerMouseDown } 
            handleMouseUp={ this.headerMouseUp }
            handleMouseMove={ this.headerMouseMove }
            close={ this.close }
          />
          <Screen content={ screen } />
          <Buttons
            numberHandler={ this.makeNumberHandler }
            operationHandler={ this.makeOperationHandler }
            submitCalculation={ this.submitCalculation }
            clearCalculation={ this.clearCalculation }
          />
        </Card>

    } else {
      calculator = <span/>;
    }

    return (
      <div className="main">
        {calculator}
        <ToolBar showCalculator={ showCalculator }/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));