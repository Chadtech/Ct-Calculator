module.exports = calculate = function(number, calculation) {
  if (calculation.then === "="){
    return number
  } else {

    var then = calculation.then;

    switch (then.operation) {
      case "*" :
        return calculate(number * parseFloat(then.number), then);

      case "/" :
        if (parseFloat(then.number) === 0) {
          return "ERROR: DIV BY 0"
        } else {
          return calculate(number / parseFloat(then.number), then);
        }

      case "+" :
        return calculate(number + parseFloat(then.number), then);

      case "-" :
        return calculate(number - parseFloat(then.number), then);
    }
  }
}