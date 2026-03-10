const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const employeeRoutes = require("./routes/employeeRoutes")
const attendanceRoutes = require("./routes/attendanceRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.use("/api/employees", employeeRoutes)
app.use("/api/attendance", attendanceRoutes)

app.listen(5000,()=>{
 console.log("Server running on port 5000")
})