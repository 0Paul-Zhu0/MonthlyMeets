const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  ownerId:{
    type: String,
    required: true,
  },
name:{
  type: String,
  required: true,
},
hours:{
  type: Number,
  required: true,
  default: 0,
},
date: {
  type: Date,
  default: Date.now,
}, 
});

const Friend = mongoose.model("Friend", FriendSchema);
module.exports = Friend;