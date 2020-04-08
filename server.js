const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://admin:Silly#B0y@ds245082.mlab.com:45082/heroku_qp8lgn79", {
  useMongoClient: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server listening on: http://localhost:3000 !`);
});
