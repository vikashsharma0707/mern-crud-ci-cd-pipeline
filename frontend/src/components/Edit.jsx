// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";



// const Edit=()=>{


//     const {empid} =useParams();

//     const [input,setInput] =useState({})

//     const loaddata=()=>{
//         let api="http://localhost:5000/employees/empEdit";
//         axios.post(api,{id:empid}).then((res)=>{
//           setInput(res.data.employee)
//         })
//     }

//     useEffect(()=>{
// loaddata()
//     },[])



//     const handleInput=(e)=>{
//         const name = e.target.name;
//         const value =e.target.value;
//         setInput(values=>({...values,[name]:value}))

//     }


//     const handleSubmit=()=>{
//         let api="http://localhost:5000/employees/empUpdate"
//         axios.post(api,input).then((res)=>{
//             alert("data updated sucessfully")

//         })
//     }


//     return(
//         <>
        
//         <h1>This is edit page</h1>



//         <input type="test" name="empNo"  value={input.empNo}  onChange={handleInput}/><br/>
//          <input type="test" name="empName"  value={input.empName}  onChange={handleInput}/><br/>
//           <input type="test" name="empCity"  value={input.empCity}  onChange={handleInput}/><br/>
//            <input type="test" name="empSalary"  value={input.empSalary}  onChange={handleInput}/><br/>

//            <button  onClick={handleSubmit}>Submit</button>
        
//         </>
//     )
// }

// export default Edit;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Edit.css"; // Create this file in the same folder

const Edit = () => {
  const { empid } = useParams();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    empNo: "",
    empName: "",
    empCity: "",
    empSalary: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const loadData = async () => {
    setLoading(true);
    setError("");

    try {
      const api = "http://localhost:5000/employees/empEdit";
      const res = await axios.post(api, { id: empid });
      if (res.data?.employee) {
        setInput(res.data.employee);
      } else {
        setError("Employee not found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load employee data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [empid]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!input.empNo || !input.empName || !input.empCity || !input.empSalary) {
      alert("Please fill all fields");
      return;
    }

    if (isNaN(input.empSalary) || Number(input.empSalary) <= 0) {
      alert("Salary must be a valid positive number");
      return;
    }

    setSaving(true);

    try {
      const api = "http://localhost:5000/employees/empUpdate";
      await axios.post(api, input);
      alert("Employee updated successfully!");
      navigate("/update"); // or wherever your list is
    } catch (err) {
      console.error(err);
      alert("Failed to update employee");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="edit-container">
        <h1 className="title">Edit Employee</h1>
        <div className="loading">Loading employee data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="edit-container">
        <h1 className="title">Edit Employee</h1>
        <div className="message error">{error}</div>
        <button className="back-btn" onClick={() => navigate("/update")}>
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="edit-container">
      <h1 className="title">Edit Employee</h1>

      <div className="form-card">
        <div className="form-group">
          <label htmlFor="empNo">Employee Number</label>
          <input
            id="empNo"
            type="text"
            name="empNo"
            value={input.empNo || ""}
            onChange={handleInput}
            placeholder="e.g. E001"
          />
        </div>

        <div className="form-group">
          <label htmlFor="empName">Employee Name</label>
          <input
            id="empName"
            type="text"
            name="empName"
            value={input.empName || ""}
            onChange={handleInput}
            placeholder="Full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="empCity">City</label>
          <input
            id="empCity"
            type="text"
            name="empCity"
            value={input.empCity || ""}
            onChange={handleInput}
            placeholder="e.g. Delhi"
          />
        </div>

        <div className="form-group">
          <label htmlFor="empSalary">Salary (₹)</label>
          <input
            id="empSalary"
            type="number"
            name="empSalary"
            value={input.empSalary || ""}
            onChange={handleInput}
            placeholder="e.g. 65000"
            min="0"
          />
        </div>

        <div className="button-group">
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={saving}
          >
            {saving ? "Updating..." : "Update Employee"}
          </button>

          <button
            className="cancel-btn"
            onClick={() => navigate("/update")}
            disabled={saving}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;