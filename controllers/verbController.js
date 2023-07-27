const dictionary = require("../models/dictionary");
const asyncHandler = require("express-async-handler");

const putWord = asyncHandler(async (req, res) => {
  try {
    const dict = await dictionary.create(req.body);
    res.status(200).json(dict);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getWordbyId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const dict = await dictionary.findById(id);
    res.status(200).json(dict);
    if (!dict) {
      res.status(404);
      throw new Error(`cannot find ${id}`);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const findWords = asyncHandler(async (req, res) => {
  const { word } = req.query;
  try {
    const dict = await dictionary.find({ word });
    res.status(200).json(dict);
    if (!dict) {
      res.status(404);
      throw new Error(`cannot find ${word}`);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const retrieveData = asyncHandler(async (req, res) => {
  try {
    const dict = await dictionary.find({});
    res.status(200).json(dict);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const updateWord = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    //const { meaning } = req.body;
    const dict = await dictionary.findByIdAndUpdate(id, req.body);
    if (!dict) {
      res.status(404);
      throw new Error(`cannot find ${id}`);
    }
    const updates = await dictionary.findById(id);
    res.status(200).json(updates);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const deleteWord = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const dict = await dictionary.findByIdAndDelete(id);
    if (!dict) {
      res.status(404);
      throw new Error(`cannot find ${id}`);
    }
    res.status(200).json(dict);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  putWord,
  getWordbyId,
  findWords,
  retrieveData,
  updateWord,
  deleteWord,
};
