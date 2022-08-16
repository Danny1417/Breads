// configuration
const Router = require("express").Router();
const Bread = require("../models/bread");


// index
Router.get("/", (req, res) => {
      res.render("Index",
            {
                  breads: Bread,
                  title: "Index Page"
      }
      )
});
// show
Router.get("/:arrayIndex", (req, res) => {
      if(Bread[req.params.arrayIndex]){
res.render("Show", {
            bread:Bread[req.params.arrayIndex]
      })
      }else{
            res.render("404")
      }
      
})


module.exports = Router
