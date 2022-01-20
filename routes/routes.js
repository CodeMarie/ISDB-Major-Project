var express = require("express");
var router = express.Router();
const { Album } = require("../models/albums");
const { Artist } = require("../models/artists");
const { Genre } = require("../models/genres");
const { Track } = require("../models/tracks");
const passport = require("passport")


router.use(express.json())
router.use(passport.initialize())


router.get("/genres", passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const genresArray = await Genre.find();
    res.json(genresArray);
  } catch (err) {
    return error;
  }
});

router.get("/tracks", passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
  const allTracks = await Track.find()
  res.json(allTracks)
  } catch (err) {
  res.status(404).json({message: err.message})
  }
  })



router.get("/tracks/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
  const track =  Track.find(
    { TrackId: req.params.id },
    (err, track) => {
      if (err) {
        res.status(401).json({ message: err });
      }
      if (!track) {
        res.status(404).json({ message: "track not found" });
      } else {
        res.status(200).json({ track });
      }
    }
  );
});

router.get("/albums/:id", passport.authenticate('jwt', {session: false}), async (req, res) => {
  const album = await Album.find(
    { AlbumId: req.params.id },
    (err, album) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      if (!album) {
        res.status(404).json({ message: "albums not found" });
      } else {
        res.status(200).json({ album });
      }
    }
  );
});

router.get("/artists/:id", passport.authenticate('jwt', {session: false}), async (req, res) => {
    const artist = await Artist.find(
      { ArtistId: req.params.id },
      (err, artist) => {
        if (err) {
          res.status(400).json({ message: err });
        }
        if (!artist) {
          res.status(404).json({ message: "track not found" });
        } else {
          res.status(200).json({ artist });
        }
      }
    );
  });
  

router.post('/tracks', passport.authenticate('jwt', {session: false}), async (req, res) => {
  const genreCheck = await Genre.findOne(
    { GenreId: req.body.GenreId })
    const albumCheck = await Album.findOne(
      { AlbumId: req.body.AlbumId })
    console.log(genreCheck)
    if (genreCheck && albumCheck) {
  try { 
    const track = new Track({
    TrackId: req.body.TrackId,
    Name: req.body.Name,
    AlbumId: req.body.AlbumId,
    MediaTypeId: req.body.MediaTypeId,
    GenreId: req.body.GenreId,
    Composer: req.body.Composer,
    Milliseconds: req.body.Milliseconds,
    Bytes: req.body.Bytes,
    UnitPrice: req.body.Unitprice
})
  await track.save() 
  res.status(201).send(track)
} 
 catch (err) {
  res.status(400).json({ message: err.message})
  }
}
  else {
    res.status(404).json({message: 'GenreId or AlbumId were not found to be valid'})
  }
  })


module.exports = router;
