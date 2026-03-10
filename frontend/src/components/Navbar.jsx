import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      background: "#1e40af",
      color: "white",
      padding: "15px",
      display: "flex",
      gap: "20px"
    }}>
      <h2>HRMS Lite</h2>

      <Link to="/" style={{color:"white"}}>Employees</Link>
      <Link to="/attendance" style={{color:"white"}}>Attendance</Link>
    </div>
  );
}