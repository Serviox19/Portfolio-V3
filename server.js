var express = require('express');
var app = express();
var logger = require('morgan');
var PORT = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(express.static("dist"));
app.use(express.static("src"));
app.use("/dist", express.static(__dirname + "/dist"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

app.get('*', function (req, res) {
  res.sendFile(process.cwd() + '/src/index.html');
});


app.listen(PORT, function (req, res) {
  console.log('Listening on PORT: ' + PORT);
});
