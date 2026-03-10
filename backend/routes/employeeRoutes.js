const router = require("express").Router()
const Employee = require("../models/Employee")

// Add employee
router.post("/", async (req, res) => {

  const { employeeId, fullName, email, department } = req.body

  const existing = await Employee.findOne({ employeeId })

  if (existing) {
    return res.status(400).json({ message: "Employee already exists" })
  }

  const employee = await Employee.create({
    employeeId,
    fullName,
    email,
    department
  })

  res.json(employee)

})

// Get all employees
router.get("/", async (req, res) => {

  const employees = await Employee.find()

  res.json(employees)

})

// Delete employee
router.delete("/:id", async (req, res) => {

  await Employee.findByIdAndDelete(req.params.id)

  res.json({ message: "Employee deleted" })

})

module.exports = router