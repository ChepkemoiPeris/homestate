const express = require("express");
var app = express();
const cors = require("cors");
var api = cors()
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler"); 
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(api, router);


app.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;