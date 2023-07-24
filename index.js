const express = require("express");
const mongoose = require("mongoose");
const dictionary = require("./models/dictionary");
const app = express();
const PORT = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello node API");
});

app.post("/provideWord", async (req, res) => {
  try {
    const dict = await dictionary.create(req.body);
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/provideWord", async (req, res) => {
  try {
    const dict = await dictionary.find({});
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/searchWord/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dict = await dictionary.findById(id);
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/provideWord/byWord", async (req, res) => {
  const { word } = req.query;
  try {
    const dict = await dictionary.find({ word });
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://babawick66:Papadoc123@verbalhubapi.yqzwfcd.mongodb.net/verbalHub-API?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () =>
      console.log(`it's alive on http://localhost:${PORT}`)
    );
    console.log("connected to MongoDb");
  })
  .catch(() => {
    console.log("error");
  });
