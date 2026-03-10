import { useState, useEffect } from "react";
import API from "../services/api";

export default function Employees() {

  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: ""
  });

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async () => {

    await API.post("/employees", form);

    setForm({
      employeeId: "",
      fullName: "",
      email: "",
      department: ""
    });

    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Add Employee</h2>

      <input
        placeholder="Employee ID"
        value={form.employeeId}
        onChange={(e) => setForm({...form, employeeId:e.target.value})}
      />

      <input
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) => setForm({...form, fullName:e.target.value})}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({...form, email:e.target.value})}
      />

      <input
        placeholder="Department"
        value={form.department}
        onChange={(e) => setForm({...form, department:e.target.value})}
      />

      <button onClick={addEmployee}>Add Employee</button>

      <h2 style={{marginTop:"30px"}}>Employee List</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>

          {employees.map(emp => (
            <tr key={emp._id}>
              <td>{emp.employeeId}</td>
              <td>{emp.fullName}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>

              <td>
                <button onClick={() => deleteEmployee(emp._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}