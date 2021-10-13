const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/libraryController");
const { authenticate } = require("../controllers/authController");

router.post("/buygame", authenticate, libraryController.buygame);
router.get("/getToshowlibrary", authenticate, libraryController.getToshowlibrary);
router.post("/commentGame", authenticate, libraryController.commentGame);
router.get("/getAllcommentGame", libraryController.getAllcommentGame);

module.exports = router;
