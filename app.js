const express = require('express');
const path = require('path');
const app = express();

// import products route
const route = require("./routes/products");

app.set('view engine', 'ejs'); // set up the template engine ejs
app.set('views', 'views'); // let the program know where to find the templates

//register a static folder, so that we can use the css files directly from HTML pages in our public folder 
app.use(express.static(path.join(__dirname, 'public')));

// use the route
app.use(route);

app.listen(process.env.PORT || 3000);