const index = require("./index");
const twilio = require("twilio");
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendOtp(phone) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await index.findByIdAndUpdate({ phone }, { otp }, { upsert: true });

  await client.message.create({
    body: `this is your otp ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone,
  });
  return otp;
}

async function verifyOtp(phone, otp) {
  const user = await index.findOne({ phone });
  if (!user || user.otp !== otp) {
    throw new Error("Invalid OTP");
  }
  return true;
}

module.exports = { sendOtp, verifyOtp };
