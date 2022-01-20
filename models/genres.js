const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
    GenreId: Number,
    Name: String,
  });

const Genre = mongoose.model("Genre", genreSchema);

module.exports = { Genre };