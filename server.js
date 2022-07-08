const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { setStatics } = require("./utils/statics");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
//End of middlewares

//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS

//Statics
setStatics(app);

//Routes
app.use(indexRoutes)
app.use("/admin", adminRoutes);

//End of routes

app.listen(8080, () => console.log("server is running"));
