const express = require("express");
const router = express.Router();
const allgameController = require("../controllers/allgameController");

router.get("/getallgame", allgameController.getAllgames);
router.put("/catalog/:id", allgameController.editGames);
router.delete("/catalog/:id", allgameController.deleteGames);

module.exports = router;
