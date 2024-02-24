const express = require("express");
const routes = express.Router();
const {
  getAll,
  postone,
} = require("./controllers");

routes.route("/tasks").get(getAll);
routes.route("/tasks").post(postone);


module.exports = routes;
