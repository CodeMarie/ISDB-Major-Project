const mongoose = require("mongoose");


const trackSchema = new mongoose.Schema({
  TrackId: {
    type: Number,
  },
  Name: {
    type: String,
  },

  AlbumId: { type: Number },

  MediaTypeId: { type: Number },

  GenreId: { type: Number },

  Composer: {
    type: String,
  },
  Milliseconds: {
    type: Number,
  },
  Bytes: {
    type: Number,
  },
  UnitPrice: {
    type: Number,
  },
});


const Track = mongoose.model("Track", trackSchema);

module.exports = { Track };
