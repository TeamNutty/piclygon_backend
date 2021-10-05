const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/libraryController");

router.get("/library", libraryController.getAllgames);

module.exports = router;
