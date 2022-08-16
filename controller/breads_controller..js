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
      
});


// NEW
Router.get('/new', (req, res) => {
      res.render('new')
  })
  
// CREATE
Router.post('/', (req, res) => {
      console.log(req.body)
      if(req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
      } else {
        req.body.hasGluten = 'false'
      }
      Bread.push(req.body)
      res.redirect('/breads')
    })
    
    


module.exports = Router
