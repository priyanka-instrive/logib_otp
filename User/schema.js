const joi = require("joi");

const phoneSchema = joi
  .string()
  .pattern(/^[0-9]$/)
  .min(10)
  .max(15)
  .required();

const otpSchema = joi
  .string()
  .length(6)
  .pattern(/^[0-9]$/)
  .required();

const sendOtpVal = (data) => {
  return phoneSchema.validate(data);
};

const verifyOtpVal = (data) => {
  return joi
    .object({
      phone: phoneSchema,
      otp: otpSchema,
    })
    .validate(data);
};

module.exports = { sendOtpVal, verifyOtpVal };
