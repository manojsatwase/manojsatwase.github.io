const express = require("express");
const app = express();
const results = require("./mobileData");
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));

app.listen(port);

console.log("server start at " + port);

app.post("/app/login", function(req, res) {
  res.json(results);
});
