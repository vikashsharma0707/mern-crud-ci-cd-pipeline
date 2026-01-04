// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";





// const View=()=>{

//     const {empview} =useParams();

//     const [val,setval]=useState({});

//     const loaddata=()=>{
//         let api="http://localhost:5000/employees/empView"
//         axios.post(api,{id:empview}).then((res)=>{
//             setval(res.data.employee)
//         })
//     }

//     useEffect(()=>{
// loaddata();
//     },[])
//     return(
//         <>
//         <h1>This is view page</h1>

//         <h1>{val.empNo}</h1>
//         <h1>{val.empName}</h1>
//         <h1>{val.empCity}</h1>
//         <h1>{val.empSalary}</h1>
//         </>
//     )
// }

// export default View;


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./View.css"; // Create this file in the same folder

const View = () => {
  const { empview } = useParams(); // renamed from empview → matches your route /view/:empview
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    setError("");

    try {
      const api = "http://localhost:5000/employees/empView";
      const res = await axios.post(api, { id: empview });

      if (res.data?.employee) {
        setEmployee(res.data.employee);
      } else {
        setError("Employee not found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load employee details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [empview]);

  if (loading) {
    return (
      <div className="view-container">
        <h1 className="title">Employee Details</h1>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error || !employee) {
    return (
      <div className="view-container">
        <h1 className="title">Employee Details</h1>
        <div className="message error">{error || "No employee found"}</div>
        <button className="back-btn" onClick={() => navigate("/update")}>
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="view-container">
      <h1 className="title">Employee Details</h1>

      <div className="detail-card">
        <div className="detail-item">
          <span className="label">Employee Number</span>
          <span className="value">{employee.empNo}</span>
        </div>

        <div className="detail-item">
          <span className="label">Name</span>
          <span className="value">{employee.empName}</span>
        </div>

        <div className="detail-item">
          <span className="label">City</span>
          <span className="value">{employee.empCity}</span>
        </div>

        <div className="detail-item">
          <span className="label">Salary</span>
          <span className="value">₹{Number(employee.empSalary).toLocaleString()}</span>
        </div>

        <div className="action-buttons">
          <button className="btn edit-btn" onClick={() => navigate(`/edit/${empview}`)}>
            Edit
          </button>

          <button className="btn back-btn" onClick={() => navigate("/update")}>
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;