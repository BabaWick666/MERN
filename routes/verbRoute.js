const express = require("express");
const router = express.Router();
const dictionary = require("../models/dictionary");
const {
  putWord,
  getWordbyId,
  findWords,
  retrieveData,
  updateWord,
  deleteWord,
} = require("../controllers/verbController");
//const verbRoute = require("./routes/verbRoute");

router.post("/provideWord", putWord);

router.get("/provideWord", retrieveData);

router.get("/searchWord/:id", getWordbyId);

router.get("/provideWord/byWord", findWords);

router.put("/provideWord/:id", updateWord);

router.delete("/provideWord/:id", deleteWord);

module.exports = router;
