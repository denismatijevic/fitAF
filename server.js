// require express & mongoose
const mongoose = require("mongoose");
var express = require("express");
const logger = require("morgan")
// require routes
var routes = require("./routes/api-routes");
var routes = require("./routes/view-routes");
var PORT = process.env.PORT || 3000;

var app = express();
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{
  useNewUrlParser: true,
  useFindAndModify: false
});
// mongoose.connect.once("open", ()=>{
  app.listen(PORT, function() {
    console.log("App listening on port:%s", PORT);
  });