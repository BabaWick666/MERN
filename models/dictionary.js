const mongoose = require("mongoose");
const dictSchema = mongoose.Schema(
  {
    word: {
      type: String,
      required: [true, "please enter word"],
    },
    meaning: {
      type: String,
      required: [true, "please enter meaning of the word"],
    },
  },
  {
    timestamps: true,
  }
);
const dictionary = mongoose.model("dictionary", dictSchema);
module.exports = dictionary;
