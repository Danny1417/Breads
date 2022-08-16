// dependencies
const express = require("express");
// configuration
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
// postman use in middleware
app.use(express.urlencoded({extended: true}));


// 404 Page
app.get ("*",(req,res)=>{
      res.send("404")
})


// routes
app.get("/", (req, res) => {
      res.send("welcome to app about breds");

});


// breads
const breadRoutes = require("./controller/breads_controller.");
app.use("/breads", breadRoutes)


// listen
app.listen(PORT, () => {
      console.log("listening on port", PORT);
})

