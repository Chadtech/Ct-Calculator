import post from "../Api/post-calculation";


export function makeNumberHandler(number) {
  return () => {
    const content = insertNumber(number, this.state.calculation);

    this.setState({
      calculation: this.state.calculation,
      screen: content
    });
  }
}


function insertNumber(number, calculation) {
  if (calculation.then === "=") {
    calculation.number = calculation.number + number;
    return calculation.number;
  } else {
    return insertNumber(number, calculation.then);
  }
} 


export function makeOperationHandler(operation) {
  return () => {
    insertOperation(operation, this.state.calculation);

    this.setState({
      calculation: this.state.calculation,
      screen: ""
    });
  }
}


function insertOperation(operation, calculation) {
  if (calculation.then === "=") {
    calculation.then = {
      number: "",
      operation: operation,
      then: "="
    } 
  } else {
    insertOperation(operation, calculation.then);
  }
}


export function submitCalculation() {
  post(this);
}


export function clearCalculation() {
  this.setState({
    screen: "",
    calculation: {
      number: "",
      then: "="
    }
  });
}
