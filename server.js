// DEPENDENCIES
const express = require("express");
// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT
const app= express();

// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static("public"));




// ROUTES
app.get("/",(req,res)=>{
    res.send("Welcome to an  App about Breads")
});
// EXTERNAL ROUTES
const breadController=require("./controller/bread");
app.use("/breads",breadController);

// 404 not found
app.get("*", (req, res) => {
    res.render("noFound")
})

// LISTEN
app.listen(PORT,()=>{
console.log("listening on port",PORT);

});
