import { Component } from "React";
import React from "React";


import Button from "./Button";


export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      numberHandler, 
      operationHandler,
      numberStuff 
    } = this.props;

    const makeNumberButton = (number) => 
      <Button 
        label={number} 
        handleClick={numberHandler(number)}
      />

    const makeOperationButton = (operation) =>
      <Button
        label={operation}
        handleClick={operationHandler(operation)}
      />

    return (
      <div className="buttons-container">
        {makeNumberButton("7")}
        {makeNumberButton("8")}
        {makeNumberButton("9")}
        {makeOperationButton("/")}
        {makeNumberButton("4")}
        {makeNumberButton("5")}
        {makeNumberButton("6")}
        {makeOperationButton("*")}
        {makeNumberButton("1")}
        {makeNumberButton("2")}
        {makeNumberButton("3")}
        {makeOperationButton("-")}
        {makeNumberButton("0")}
        <Button label={"C"}/>
        <Button label={"="}/>
        {makeOperationButton("+")}
      </div>
    );
  }
} 