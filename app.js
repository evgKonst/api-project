const express = require("express");
const path = require("path");
const dotenv = require('dotenv')


const app = express();

dotenv.config()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/game", (req, res) => {
  res.render("game");
});

app.get("/directions", (req, res) => {
  res.render("directions");
});

app.listen(3000);
