// configuration
const Router = require("express").Router();
const Bread = require("../models/bread")

// index
Router.get("/", (req, res) => {
      res.send(Bread)
});
// show
Router.get("/:arrayIndex", (req, res) => {
      res.send(Bread[req.params.arrayIndex])
})


module.exports = Router
