const express = require("express");
const Router= express.Router()
const Bread = require("../models/bread");


// INDEX
Router.get("/", (req, res) => {
  // renders a view
  res.render("index", {
    breads: Bread,
    title: "Index Page"
  });
  // res.send(Bread);
});
// SHOW
Router.get('/:arrayIndex', (req, res) => {
  const index = req.params.arrayIndex
  // renders the raw data"JSON"
    // res.send(Bread[index])
  console.log("get request to /:arrayIndex",Bread[index])
  
  res.render("show", {
    bread:Bread[index],
  })
  })
  


module.exports = Router
