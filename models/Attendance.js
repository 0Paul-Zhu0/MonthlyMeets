const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  eventId:{
    type: String,
    required: true,
  },
userId:{
  type: String,
  required: false,
  default: 0,
},
name:{
  type:String,
  required: true,
},
status:{
  type: String,
  required: true,
},
date: {
  type: Date,
  default: Date.now,
}, 
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);
module.exports = Attendance;