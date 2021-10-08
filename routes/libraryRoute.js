const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/libraryController");
const { authenticate } = require("./authRoute");

router.get("/library", authenticate, libraryController.getAllgames);

module.exports = router;
