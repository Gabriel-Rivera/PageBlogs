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

router.get('/search-city', (req, res, next) => {
  const city = req.query.city;
  Article.find({ "location" : { $regex: city, $options: 'i' }})
  .then(cities=>{
    return res.json(cities);
  })
  .catch(err=>res.send(err));
});



router.post('/new', (req, res, next) =>{ 
    console.log(req.body);
    const newArticle = new Article({
      title: req.body.title,
      category: req.body.category,
      location: req.body.location,
      content: req.body.content,      
      //pathPicture: `/uploads/${req.file.filename}`
    });
    
    newArticle.save()
      .then(articleCreated => res.redirect(`/articles/${articleCreated._id}`))
      .catch(err => console.log(err));
  });  

  router.get('/:id', (req, res, next) => {
    Article.findById(req.params.id)
      .then(result => res.render("articles/single", {article:result}))
  });
  
  const upload = multer({ dest: './public/uploads/' });
  
  router.post('/:id', upload.single('photo'), (req, res, next) =>{
    // console.log('uploading photo');
    // console.log(req.file);

    Article.findById(req.params.id)
    .then(article=>{
      console.log(article);
      article.pathPicture.push(`/uploads/${req.file.filename}`)
      article.save();
      res.redirect('/articles/'+req.params.id);
    })
    .catch(err=>res.send(err))


});


module.exports = router;