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

// SHOW DETAILS
Router.get('/:arrayIndex', (req, res) => {
  const index = req.params.arrayIndex
  // renders the raw data"JSON"
    // res.send(Bread[index])
  
  
  const bread = Bread[index];
  console.log(`get request to /breads/${index}`, bread)
  
  // if that bread was not found
  if (bread) {
    res.render("show", {
      bread:bread,
    })
  }
  else {
    res.render("notFound")
  }
  
  res.render("show", {
    bread:bread,
  })
  })
  


module.exports = Router
