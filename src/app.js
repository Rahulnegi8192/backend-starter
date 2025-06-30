const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = process.env.port || 5000;

app.use(express.json());

app.get("/pong", async (req, res) => {
  res.status(200).json({ message: "pong" });
});

app.listen(port, () => {
  console.log("server is running on port:", port);
});
