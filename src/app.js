// mongodb
require("./config/db");

const express = require('express');
const bodyParser = express.json;
const cors = require('cors');

// create server app
const app = express();
app.use(cors());
app.use(bodyParser());

const routes = require("./routes");
app.use("/api/v1",routes);


module.exports = app;