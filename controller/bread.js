const Router  = require("express").Router();
const Bread = require("../models/bread")

// INDEX
Router.get("/", (req, res) => {
  res.render("index", {
    breads: Bread,
    title: "Index Page"
  });
  // res.send(Bread);
});
// SHOW
Router.get('/:arrayIndex', (req, res) => {
  const arrayIndex = req.params.arrayIndex
    // res.send(Bread[arrayIndex])
  res.render("show", {
    bread:Bread[index],
  })
  })
  


module.exports = Router
