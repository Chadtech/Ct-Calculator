module.exports = function(app) {
  app.get('/', function(req, res, next) {
    var indexPage = join(__dirname, './../development/index.html');
    return res.status(200).sendFile(indexPage);
  })
}