// import axios from "axios";
// import { useState } from "react";



// const Insert=()=>{
//     const [input,setinput]=useState({})


//     const handleInput=(e)=>{
//         const name =e.target.name
//         const value =e.target.value
//         setinput((values)=>({...values,[name]:value}))
//         console.log(input)

//     }

//     const handleSubmit=()=>{
//         let api="http://localhost:5000/employees/empInsert"
//         axios.post(api,input).then((res)=>{
//           alert("data save sucessfully")
//         })
//     }
//     return(
//         <>
//         <h1>This is insert page</h1>


//         <input type="text" name="empNo" value={input.empNo}  onChange={handleInput}/><br/><br/>
//         <input type="text" name="empName" value={input.empName}  onChange={handleInput}/><br/><br/>
//         <input type="text" name="empCity" value={input.empCity}  onChange={handleInput}/><br/><br/>
//         <input type="text" name="empSalary" value={input.empSalary}  onChange={handleInput}/><br/><br/>
//         <button  onClick={handleSubmit}>Submit</button>
        
//         </>
//     )
// }

// export default Insert;

import { useState } from "react";
import axios from "axios";
import "./Insert.css"; // Create this file in the same folder

const Insert = () => {
  const [input, setInput] = useState({
    empNo: "",
    empName: "",
    empCity: "",
    empSalary: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!input.empNo || !input.empName || !input.empCity || !input.empSalary) {
      setMessage("Please fill all fields!");
      return;
    }

    if (isNaN(input.empSalary) || Number(input.empSalary) <= 0) {
      setMessage("Salary must be a valid positive number!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const api = "https://mern-crud-ci-cd-pipeline-3.onrender.com/employees/empInsert";
      await axios.post(api, input);
      setMessage("Employee added successfully! 🎉");
      setInput({
        empNo: "",
        empName: "",
        empCity: "",
        empSalary: "",
      }); // Reset form
    } catch (error) {
      console.error(error);
      setMessage("Failed to save employee. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="insert-container">
      <h1 className="title">Add New Employee</h1>

      <div className="form-card">
        {message && (
          <div className={`message ${message.includes("success") ? "success" : "error"}`}>
            {message}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="empNo">Employee Number</label>
          <input
            type="text"
            id="empNo"
            name="empNo"
            value={input.empNo}
            onChange={handleInput}
            placeholder="e.g. E001"
          />
        </div>

        <div className="form-group">
          <label htmlFor="empName">Employee Name</label>
          <input
            type="text"
            id="empName"
            name="empName"
            value={input.empName}
            onChange={handleInput}
            placeholder="Full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="empCity">City</label>
          <input
            type="text"
            id="empCity"
            name="empCity"
            value={input.empCity}
            onChange={handleInput}
            placeholder="e.g. Mumbai"
          />
        </div>

        <div className="form-group">
          <label htmlFor="empSalary">Salary (₹)</label>
          <input
            type="number"
            id="empSalary"
            name="empSalary"
            value={input.empSalary}
            onChange={handleInput}
            placeholder="e.g. 45000"
            min="0"
          />
        </div>

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Saving..." : "Add Employee"}
        </button>
      </div>
    </div>
  );
};

export default Insert;