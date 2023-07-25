const express = require("express");
const router = express.Router();
const dictionary = require("../models/dictionary");
//const verbRoute = require("./routes/verbRoute");

router.post("/provideWord", async (req, res) => {
  try {
    const dict = await dictionary.create(req.body);
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/provideWord", async (req, res) => {
  try {
    const dict = await dictionary.find({});
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/searchWord/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dict = await dictionary.findById(id);
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/provideWord/byWord", async (req, res) => {
  const { word } = req.query;
  try {
    const dict = await dictionary.find({ word });
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
