const express = require("express");
const router = express.Router();
const allgameController = require("../controllers/allgameController");
const { authenticate, checkadmin } = require("../controllers/authController");
const { upload } = require("../middlewares/upload");

router.get("/getallgame", allgameController.getAllgames);
router.get("/getOnegame/:id", allgameController.getOnegames);
router.put("/catalog/:id", authenticate, checkadmin, upload.array("gamePicture"), allgameController.editGames);
router.delete("/catalog/:id", authenticate, checkadmin, allgameController.deleteGames);

module.exports = router;
