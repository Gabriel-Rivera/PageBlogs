const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const ArticleSchema = new Schema({

//  _creator      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title         : { type: String, required: true },
  category      : { type: String, required: true },
  content       : { type: String, required: true },
  pathPicture   : [{type : String}]
});

// ArticleSchema.virtual('timeRemaining').get(function () {
//   let remaining = moment(this.deadline).fromNow(true).split(' ');
//   let [days, unit] = remaining;
//   return { days, unit };
// });

module.exports = mongoose.model('Article', ArticleSchema);