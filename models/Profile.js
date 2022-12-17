const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  c_name:{
    type:String
  },
  phoneNum:{
    type:Number
  } ,
  c_email:{
    type:String
  } ,

  url: {
    type: String
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
