
var express = require("express");
var app = express();

var restapi = require('./routes/restapi');

app.use('/api', restapi);

var server = app.listen(3001, function() {
  console.log("Node.js is listening to PORT: " + server.address().port);
});

// View EngineにEJSを指定
app.set('view engine', 'ejs');

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next) {
  res.render("index", {});
});

