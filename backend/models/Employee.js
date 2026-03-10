const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({

 employeeId:{
  type:String,
  required:true,
  unique:true
 },

 fullName:{
  type:String,
  required:true
 },

 email:{
  type:String,
  required:true
 },

 department:{
  type:String,
  required:true
 }

})

module.exports = mongoose.model("Employee",EmployeeSchema)