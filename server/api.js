var calculate = require("./calculate");

module.exports = function(app) {
  app.post("/api/calculation", function(req, res) {

    var result = calculate(
      parseFloat(req.body.number), 
      req.body
    );

    res.send(JSON.stringify({
      result: String(result)
    }));
  })
}