const dictionary = require("../models/dictionary");

const putWord = async (req, res) => {
  try {
    const dict = await dictionary.create(req.body);
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getWordbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const dict = await dictionary.findById(id);
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const findWords = async (req, res) => {
  const { word } = req.query;
  try {
    const dict = await dictionary.find({ word });
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const retrieveData = async (req, res) => {
  try {
    const dict = await dictionary.find({});
    res.status(200).json(dict);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { putWord, getWordbyId, findWords, retrieveData };
