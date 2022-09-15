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
//GET INFO FROM  NEW.JSX
Router.get('/new', (req, res) => {
      res.render('new')
  })
// show
Router.get("/:arrayIndex", (req, res) => {
      if(Bread[req.params.arrayIndex]){
res.render("Show", {
      bread: Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
      })
      }else{
            res.render("404")
      }
      });
// CREATE
Router.post('/', (req, res) => {
      if (!req.body.image) {
            req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      }
      if (req.body.hasGluten === 'on') {
            req.body.hasGluten = true
      } else {
            req.body.hasGluten = false
      }
      Bread.push(req.body)
      res.redirect('/breads')
});
// Edit

Router.get("/:arrayIndex/edit", (req, res) => {
      res.render("EDIT", {
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex,
      });
});


// Update
Router.put("/:arrayIndex", (req, res) => {
      if (req.body.hasGluten === 'on') {
            req.body.hasGluten = true
      } else {
            req.body.hasGluten = false
      }
      Bread[req.params.arrayIndex] = req.body;
      res.redirect(`/breads/${req.params.arrayIndex}`);
});

  //   DELETE FORM
Router.delete("/:arrayIndex", (req, res) => {
      Bread.splice(req.params.arrayIndex, 1);
      res.status(303).redirect("/breads");
})  
    
    


module.exports = Router
