// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";



// const Update=()=>{



//     const navigate =useNavigate()
//     const [val,setval] =useState([])

//     const loaddata=()=>{
//         let api="http://localhost:5000/employees/empDisplay"
//         axios.get(api).then((res)=>{
//               setval(res.data.employees)
//         })
//     }

//     useEffect(()=>{
//         loaddata();
//     })


//     const mydel=(id)=>{
//         let api="http://localhost:5000/employees/empDelete"
//         axios.post(api,{id:id}).then((res)=>{
//             alert("data deleted sucessfully")
//             loaddata()

//         })

//     }



//     const myEdit=(id)=>{
//         navigate(`/edit/${id}`)

//     }

//     const myView=(id)=>{
//         navigate(`/view/${id}`)
//     }

//     let sno=0;
//     const ans=val.map((key)=>{
//         sno++
//         return(
//             <>
//             <tr>
//                 <td>{sno}</td>
//                 <tr>{key.empNo}</tr>
//                 <tr>{key.empName}</tr>
//                 <tr>{key.empCity}</tr>
//                 <tr>{key.empSalary}</tr>

//                 <tr>
//                     <button  onClick={()=>{myView(key._id)}}>View</button>
//                 </tr>

//                 <tr>
//                     <button  onClick={()=>{myEdit(key._id)}}>Edit</button>
//                 </tr>

//                 <tr>
//                     <button  onClick={()=>{mydel(key._id)}}>Delete</button>
//                 </tr>
//             </tr>
            
//             </>
//         )

//     })


//     return(
//         <>
//         <h1>This is update page</h1>

//         {ans}
        
//         </>
//     )
// }

// export default Update;

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Update.css"; // Create this file in the same folder

const Update = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const api = "https://mern-crud-ci-cd-pipeline-3.onrender.com/employees/empDisplay";
      const res = await axios.get(api);
      setEmployees(res.data.employees || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load employees. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      const api = "https://mern-crud-ci-cd-pipeline-3.onrender.com/employees/empDelete";
      await axios.post(api, { id });
      alert("Employee deleted successfully");
      loadData(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to delete employee");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view/${id}`);
  };

  if (loading) {
    return (
      <div className="update-container">
        <h1 className="title">Employee Management</h1>
        <div className="loading">Loading employees...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="update-container">
        <h1 className="title">Employee Management</h1>
        <div className="message error">{error}</div>
      </div>
    );
  }

  return (
    <div className="update-container">
      <h1 className="title">Employee Management</h1>

      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Emp No</th>
              <th>Name</th>
              <th>City</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-data">
                  No employees found
                </td>
              </tr>
            ) : (
              employees.map((emp, index) => (
                <tr key={emp._id}>
                  <td>{index + 1}</td>
                  <td>{emp.empNo}</td>
                  <td>{emp.empName}</td>
                  <td>{emp.empCity}</td>
                  <td>₹{Number(emp.empSalary).toLocaleString()}</td>
                  <td className="actions-cell">
                    <button
                      className="btn view-btn"
                      onClick={() => handleView(emp._id)}
                    >
                      View
                    </button>
                    <button
                      className="btn edit-btn"
                      onClick={() => handleEdit(emp._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn delete-btn"
                      onClick={() => handleDelete(emp._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="actions-bar">
        <button className="btn add-btn" onClick={() => navigate("/insert")}>
          + Add New Employee
        </button>
      </div>
    </div>
  );
};

export default Update;