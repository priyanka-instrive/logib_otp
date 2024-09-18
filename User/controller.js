const service = require("./service");
const { sendOtpVal, verifyOtpVal } = require("./schema");

const sendOtp = async function (req, res) {
  const { error } = sendOtpVal(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const { phone } = req.body;
    await service.sendOtp(phone);
    return res.status(200).send("otp sent successfully");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const verifyOtp = async function (req, res) {
  const { error } = verifyOtpVal(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const { phone, otp } = req.body;
    await service.verifyOtp(phone, otp);
    return res.status(200).send("otp verified");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { sendOtp, verifyOtp };
