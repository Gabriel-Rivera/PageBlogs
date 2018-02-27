const express  = require('express');
const router   = express.Router();
const TYPES    = require('../models/types');
const { ensureLoggedIn }  = require('connect-ensure-login');
const User = require ("../models/User.js");
//para subir imagenes in multer
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

router.get('/create', (req, res, next) => {
    res.render('create', { types: TYPES });
  });

//   router.post('/create', ensureLoggedIn('/login'),upload.single('picture'), (req, res, next) => {
//     console.log(req.file)
//     const newCampaign = new Campaign({
//       title: req.body.title,
//       goal: req.body.goal,
//       description: req.body.description,
//       category: req.body.category,
//       deadline: req.body.deadline,
//       _creator: req.user._id,
//       pathPicture: `/uploads/${req.file.filename}`
//     });
  
//     newCampaign.save()
//       .then(campaignCreated => res.redirect(`/campaign/${campaignCreated._id}`))
//       .catch(err => ren.render("error"));
//   });


module.exports = router;