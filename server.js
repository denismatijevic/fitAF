// require express & mongoose
require("dotenv").config()
const mongoose = require("mongoose");
var express = require("express");
const logger = require("morgan")
// require routes
var apiRoutes = require("./routes/api-routes");
var htmlRoutes = require("./routes/view-routes");
var PORT = process.env.PORT || 8080;

var app = express();
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitaf",{
  useNewUrlParser: true,
  useFindAndModify: false
});
// mongoose.connect.once("open", ()=>{
  app.listen(PORT, function() {
    console.log("App listening on port:%s", PORT);
  });