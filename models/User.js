const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email      : {type: String },
  username   : {type: String ,trim:true },
  password   : {type: String },
  description: {type: String},
  imgUrl     : { type: String, default: "" }
});

const User = mongoose.model('User', userSchema);
module.exports = User;