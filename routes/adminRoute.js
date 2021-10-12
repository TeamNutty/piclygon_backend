const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authenticate, checkadmin } = require("../controllers/authController");
const { upload } = require("../middlewares/upload");

router.post("/admin", authenticate, checkadmin, upload.array("gamePicture"), adminController.postgame);

module.exports = router;
