const express = require("express");
const router = express.Router();

const productController = require('../controllers/products'); 

router.get('/', productController.getIndex);

// export the router back to app.js
module.exports = router;