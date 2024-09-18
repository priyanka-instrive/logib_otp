const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/send_otp", controller.sendOtp);
router.post("/verify_otp", controller.verifyOtp);

module.exports = router;
