const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

const loginRoute = require("./User/route");

mongoose
  .connect("mongodb://127.0.0.1:27017/OTP-LOGIN", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo is connected");
  })
  .catch(() => console.log(err));

app.use("/api", loginRoute);

app.listen(port, () => {
  console.log("server is running");
});
