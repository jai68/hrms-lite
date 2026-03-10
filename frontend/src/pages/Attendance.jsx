import { useState } from "react";
import API from "../services/api";

export default function Attendance(){

  const [form,setForm] = useState({
    employeeId:"",
    date:"",
    status:"Present"
  });

  const markAttendance = async () => {

    await API.post("/attendance",form);

    alert("Attendance Marked!");

    setForm({
      employeeId:"",
      date:"",
      status:"Present"
    });

  };

  return(

    <div style={{padding:"20px"}}>

      <h2>Mark Attendance</h2>

      <input
        placeholder="Employee ID"
        value={form.employeeId}
        onChange={(e)=>setForm({...form,employeeId:e.target.value})}
      />

      <input
        type="date"
        value={form.date}
        onChange={(e)=>setForm({...form,date:e.target.value})}
      />

      <select
        value={form.status}
        onChange={(e)=>setForm({...form,status:e.target.value})}
      >
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button onClick={markAttendance}>
        Mark Attendance
      </button>

    </div>
  );

}