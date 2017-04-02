import { Component } from "React";
import React from "React"
import ReactDOM from "react-dom";

// Actions
import * as Actions from "./Actions"

// Components
import Header from "./View/Header";
import Card from "./View/Card";
import Screen from "./View/Screen";
import Buttons from "./View/Buttons"

// State
import * as Init from "./Init";


class App extends Component {
  constructor(props) {
    super(props);
    
    Actions.set(this);
    this.state = Init.state;
  }

  render() {
    const { 
      cardPosition,
      screen,
      calculation
    } = this.state;

    console.log("SCREEN", screen)
    console.log(calculation);

    return (
      <Card position={cardPosition}>
        <Header 
          handleMouseDown={ this.headerMouseDown } 
          handleMouseUp={ this.headerMouseUp }
          handleMouseMove={ this.headerMouseMove }
        />
        <Screen content={ screen } />
        <Buttons
          numberHandler={ 
            this.makeNumberHandler(this, calculation)
          }
          operationHandler= { 
            this.makeOperationHandler(this, calculation)
          }
        />
      </Card>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));