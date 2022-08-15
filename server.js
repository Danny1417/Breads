
// dependeccies


const express = require("express");
// configuration
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
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

