const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
   ArtistId: Number,  
   Name: String 
});

const Artist = mongoose.model('Artist', artistSchema);


module.exports = {Artist};

