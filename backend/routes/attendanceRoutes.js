const router = require("express").Router()
const Attendance = require("../models/Attendance")

// Mark attendance
router.post("/", async (req, res) => {

  const { employeeId, date, status } = req.body

  if (!employeeId || !date || !status) {
    return res.status(400).json({ message: "All fields required" })
  }

  const attendance = await Attendance.create({
    employeeId,
    date,
    status
  })

  res.json(attendance)

})

// Get attendance by employee
router.get("/:employeeId", async (req, res) => {

  const records = await Attendance.find({
    employeeId: req.params.employeeId
  })

  res.json(records)

})

module.exports = router