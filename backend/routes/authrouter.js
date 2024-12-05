const express = require("express");
const {
  loginGetController,
  loginController,
  loginPutController,
  loginDeleteController,
} = require("../controllers/loginController");
const {
  SignGetController,
  SignController,
  SignPutController,
  SignDeleteController,
} = require("../controllers/SignController");

const loginRouter = express.Router();
const SignRouter = express.Router();

//login router
loginRouter.get("/user/login", loginGetController);
loginRouter.post("/user/login", loginController);
loginRouter.put("/user/:id", loginPutController);
loginRouter.delete("/user/:id", loginDeleteController);

//Sign router
SignRouter.get("/user/Sign", SignGetController);
SignRouter.post("/user/Sign", SignController);
SignRouter.put("/user/:id", SignPutController);
SignRouter.delete("/user/:id", SignDeleteController);

module.exports = { loginRouter, SignRouter };
