const express = require('express');
const app = express();

// import products route
const route = require("./routes/products");

app.set('view engine', 'ejs'); // set up the template engine ejs
app.set('views', 'views'); // let the program know where to find the templates

// use the route
app.use(route);

app.listen(process.env.PORT || 3000);