const express = require("express");

exports.ping = (req, res) => {
  res.status(200).json({ message: "pong" });
};
