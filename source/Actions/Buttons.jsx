export function makeNumberHandler(app, calculation) {
  return function(number) {
    return function() {
      const content = insertNumber(number, calculation);

      console.log("content in action", content)

      app.setState({
        calculation: calculation,
        screen: content
      });
    }
  }
}


function insertNumber(number, calculation) {
  if (calculation.then === "=") {
    const number_ = calculation.number + number;
    calculation.number = calculation.number + number;
    return calculation.number;
  } else {
    return insertNumber(number, calculation.then);
  }
} 


export function makeOperationHandler(app, calculation) {
  return function(operation) {
    return function(){
      insertOperation(operation, calculation);

      app.setState({
        calculation: calculation,
        screen: ""
      })
    }
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
    insertOperation(operation, calculation.then)
  }
}