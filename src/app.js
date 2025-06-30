const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");

const pingRoute = require("./routes/pingRoute");

const app = express();
app.use(express.json());

app.use(cors());

app.use("/pong", pingRoute);

module.exports = app;
