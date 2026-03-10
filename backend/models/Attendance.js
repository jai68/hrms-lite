const mongoose = require("mongoose")

const AttendanceSchema = new mongoose.Schema({

 employeeId:{
  type:String,
  required:true
 },

 date:{
  type:String,
  required:true
 },

 status:{
  type:String,
  enum:["Present","Absent"]
 }

})

module.exports = mongoose.model("Attendance",AttendanceSchema)