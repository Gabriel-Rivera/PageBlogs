const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const ArticleSchema = new Schema({

//  _creator      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title         : { type: String, required: true },
  category      : { type: String, required: true },
  location      : { type: String,required: true},
  content       : { type: String, required: true },
  pathPicture   : [{type : String}]
});

module.exports = mongoose.model('Article', ArticleSchema);



