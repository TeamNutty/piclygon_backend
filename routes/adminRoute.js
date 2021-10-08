const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { upload } = require("../middlewares/upload");

router.post("/admin", upload.array("gamePicture"), adminController.postgame);

module.exports = router;
