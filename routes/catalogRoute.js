const express = require("express");
const router = express.Router();
const catalogController = require("../controllers/catalogController");

router.get("/catalog", catalogController.getAllgames);
router.put("/catalog/:id", catalogController.editGames);
router.delete("/catalog/:id", catalogController.deleteGames);

module.exports = router;
