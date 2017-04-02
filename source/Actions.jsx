import * as Header from "./Actions/Header";
import * as Buttons from "./Actions/Buttons";


export function set(app) {
  app.headerMouseDown = Header.handleMouseDown.bind(app);
  app.headerMouseUp = Header.handleMouseUp.bind(app);
  app.headerMouseMove = Header.handleMouseMove.bind(app);

  app.makeNumberHandler = Buttons.makeNumberHandler.bind(app);
  app.makeOperationHandler = Buttons.makeOperationHandler.bind(app);
}