import root from "./root";


export default function post(app){

  app.setState({
    screen: "CALCULATING"
  });

  const request = new XMLHttpRequest();
  request.open("POST", root + "api/calculation", true);
  request.setRequestHeader("Content-type", "application/json");

  request.onreadystatechange = function() {
    const readyStateIs4 = request.readyState === 4;
    const statusIs200 = request.status === 200; 

    if (readyStateIs4 && statusIs200) {
      const response = JSON.parse(request.responseText);

      app.setState({
        screen: response.result,
        calculation: {
          number: response.result,
          then: "="
        }
      });
    }
  }

  request.send(JSON.stringify(app.state.calculation));
}


