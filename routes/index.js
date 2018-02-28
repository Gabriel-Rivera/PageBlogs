const express = require('express');
const router  = express.Router();
const passport = require ("passport")

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]
}));

router.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/",
  successRedirect: "/private-page"
}));

module.exports = router;
