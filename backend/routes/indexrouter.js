const express = require("express");
const {
  userGetController,
  userPostController,
  userPutController,
  userDeleteController,
} = require("../controllers/userController");
const {
  movieGetController,
  moviePostController,
  moviePutController,
  movieDeleteController,
} = require("../controllers/movieController");

const userRouter = express.Router();
const movieRouter = express.Router();

// Router for user
userRouter.get("/user", userGetController);
userRouter.post("/user", userPostController);
userRouter.put("/user/:id", userPutController);
userRouter.delete("/user", userDeleteController);

// Router for movie
movieRouter.get("/movie", movieGetController);
movieRouter.post("/movie", moviePostController);
movieRouter.put("/movie/:id", moviePutController);
movieRouter.delete("/movie", movieDeleteController);

// Exporting the routers
module.exports = { userRouter, movieRouter };
