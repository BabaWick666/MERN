require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const verbRoute = require("./routes/verbRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", verbRoute);
//app.use("/api/searchWord", verbRoute);
app.get("/", (req, res) => {
  res.send("hello node API");
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`it's alive on http://localhost:${PORT}`)
    );
    console.log("connected to MongoDb");
  })
  .catch(() => {
    console.log("error");
  });
