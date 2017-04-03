export default function(app) {
  return function(event) {
    switch (event.keyCode) {
      case 48 : 
        app.makeNumberHandler("0")();
        break;

      case 49 :
        app.makeNumberHandler("1")();
        break;

      case 50 :
        app.makeNumberHandler("2")();
        break;

      case 51 :
        app.makeNumberHandler("3")();
        break;

      case 52 :
        app.makeNumberHandler("4")();
        break;

      case 53 :
        app.makeNumberHandler("5")();
        break;

      case 54 :
        app.makeNumberHandler("6")();
        break;

      case 55 :
        app.makeNumberHandler("7")();
        break;

      case 56 : 
        if (event.shiftKey) {
          app.makeOperationHandler("*")();
        } else {
          app.makeNumberHandler("8")();
        }
        break;

      case 57 :
        app.makeNumberHandler("9")();
        break;

      case 191 : 
        app.makeOperationHandler("/")();
        break;

      case 187 : 
        if (event.shiftKey) {
          app.makeOperationHandler("+")();
        } else {
          app.submitCalculation();
        }
        break;

      case 189 :
        app.makeOperationHandler("-")();
        break;

      case 13 :
        app.submitCalculation();
        break;

    }
  }
}