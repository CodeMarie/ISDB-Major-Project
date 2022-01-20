var express = require("express");
var router = express.Router();
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const secret_or_key = process.env.SECRET_OR_KEY

const jwtOptions = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: secret_or_key
};

router.use(express.json());
router.use(passport.initialize());

let strategy = new passportJwt.Strategy(jwtOptions, (jwtPayload, next) => {
  User.findOne({ id: jwtPayload.id }, function (err, user) {
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
});

passport.use(strategy);


router.get("/", async (req, res) => {
  try {
    const usersArray = await User.find();
    res.send(usersArray);
  } catch (err) {
    return error;
  }
});

router.post("/login", (req, res) => {
  if (req.body.username && req.body.password) {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username: username },
      function (err, user) {
        if (err) {
          res.status(401).json(err);
        } else if (!user) {
          return res.status(401).json({
            message: "user not registered."
          });
        }
        user.authenticate(
          password,
          function (err, user) {
            if (err) {
              res.status(401).json(err)
            }
            if (user) {
              const payload = { id: user.id };
              const token = jwt.sign(payload, jwtOptions.secretOrKey);
              res.status(200).json({
                message: "login successful.",
                token: token
              });
            } else {
              res.status(401).json({
                message: "invalid password."
              });
            }
          });
      });
  } else {
    res.status(401).json({
      message: "missing username or password."
    });
  }
});


router.post("/register", (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        res.status(401).json(err);
      } else if (user) {
        res.status(401).json({ message: "username is in use" });
      } else {
        const newUser = new User({ username: req.body.username });
        User.register(newUser, req.body.password, (err) => {
          if (err) {
            res.status(401).json(err);
          } else {
            res.status(201).json({ message: "registration successful" });
          }
        });
      }
    });
  } else {
    res.status(401).json({ message: "missing username or password" });
  }
});

module.exports = router;
