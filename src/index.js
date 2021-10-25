const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP Logger
app.use(morgan("dev"));

// Template engine
app.engine("hbs", handlebars({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
