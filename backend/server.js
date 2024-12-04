const express = require("express");
const mongoose = require("mongoose");
const config = require("./db/config");
const { userRouter, movieRouter } = require("./routes/indexrouter");
const app = express();
const port = config.port || 5000;
app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Server...");
});

mongoose
  .connect(config.dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection refused:", err);
  });
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
