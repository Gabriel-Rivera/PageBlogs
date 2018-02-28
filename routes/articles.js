const express  = require('express');
const router   = express.Router();
const Article = require('../models/Article')
const { ensureLoggedIn }  = require('connect-ensure-login');
const User = require ("../models/User.js");
//para subir imagenes in multer
var multer  = require('multer');


router.get('/', (req, res, next) => {
    res.render('articles');
  });

router.post('/new', (req, res, next) =>{ 
    console.log(req.body)
    const newArticle = new Article({
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
    //   pathPicture: `/uploads/${req.file.filename}`
    });
  
    newArticle.save()
      .then(articleCreated => res.redirect(`/articles/${articleCreated._id}`))
      .catch(err => console.log(err));
  });  

  router.get('/:id', (req, res, next) => {
    Article.findById(req.params.id)
      .then(result => res.render("articles/single", {article:result}))
  });


  router.get('/', (req, res, next) => {
    res.render('articles');
  });
  
  const upload = multer({ dest: './public/uploads/' });
  
  router.post('/upload', upload.single('photo'), (req, res) =>{
    console.log('uploading photo');
    console.log(req.file);
  
  
    const pic = new Picture({
      name: req.body.pathPicture,
      path: `/uploads/${req.file.filename}`,
      originalName: req.file.originalname
    });
  
    pic.save((err) => {
        res.redirect('/');
    });
  });


module.exports = router;