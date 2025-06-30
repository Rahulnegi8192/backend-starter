const express = require("express");
const router = express.Router();

const { ping } = require("../controllers/pingControl");

router.get("/", ping);

module.exports = router;
