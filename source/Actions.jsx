import * as Header from "./Actions/Header";
import * as Buttons from "./Actions/Buttons";
import Keyboard from "./Actions/Keyboard";


export function set(app) {
  app.headerMouseDown = Header.handleMouseDown.bind(app);
  app.headerMouseUp = Header.handleMouseUp.bind(app);
  app.headerMouseMove = Header.handleMouseMove.bind(app);
  app.close = Header.close.bind(app);

  app.makeNumberHandler = Buttons.makeNumberHandler.bind(app);
  app.makeOperationHandler = Buttons.makeOperationHandler.bind(app);
  app.submitCalculation = Buttons.submitCalculation.bind(app);
  app.clearCalculation = Buttons.clearCalculation.bind(app);

  document.addEventListener("keydown", Keyboard(app));
}