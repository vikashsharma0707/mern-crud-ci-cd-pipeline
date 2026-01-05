// import axios from "axios";
// import { useEffect, useState } from "react";

// const Search = () => {

//   const [empno, setempno] = useState("");
//   const [val, setdata] = useState([]);

//   const handleSearch = () => {
//     let api = "/employees/empSearch";
//     axios.post(api, { empNo: empno }).then((res) => {   // ✅ key name fix
//       setdata(res.data.employee || []);                // ✅ array fix
//       console.log(res.data);
//     });
//   };

//   useEffect(() => {
//     handleSearch();
//   }, []);

//   const ans = val.map((key, index) => {
//     return (
//       <tr key={index}>
//         <td>{key.empNo}</td>
//         <td>{key.empName}</td>
//         <td>{key.empCity}</td>
//         <td>{key.empSalary}</td>
//       </tr>
//     );
//   });

//   return (
//     <>
//       <h1>This is search page</h1>

//       <input
//         type="text"
//         value={empno}
//         onChange={(e) => { setempno(e.target.value); }}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {ans}
//     </>
//   );
// };

// export default Search;


// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./Search.css"; // Create this file in the same folder

// // const Search = () => {
// //   const [empno, setEmpno] = useState("");
// //   const [employee, setEmployee] = useState(null); // single object or null
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSearch = async () => {
// //     if (!empno.trim()) {
// //       setError("Please enter an Employee Number");
// //       setEmployee(null);
// //       return;
// //     }

// //     setLoading(true);
// //     setError("");
// //     setEmployee(null);

// //     try {
// //       const api = "https://mern-crud-ci-cd-pipeline-3.onrender.com/employees/empSearch";
// //       const res = await axios.post(api, { empNo: empno.trim() });

// //       if (res.data && res.data.employee) {
// //         setEmployee(res.data.employee);
// //       } else {
// //         setError("No employee found with this number");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to fetch employee data. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Optional: auto-search when typing (debounced) or just on mount with empty
// //   useEffect(() => {
// //     // You can remove or keep — currently disabled auto-search on mount
// //     // handleSearch();
// //   }, []);

// //   return (
// //     <div className="search-container">
// //       <h1 className="title">Search Employee</h1>

// //       <div className="search-card">
// //         <div className="search-input-group">
// //           <label htmlFor="empNo">Employee Number</label>
// //           <div className="input-wrapper">
// //             <input
// //               id="empNo"
// //               type="text"
// //               value={empno}
// //               onChange={(e) => setEmpno(e.target.value)}
// //               placeholder="e.g. E001 or 1001"
// //               onKeyDown={(e) => {
// //                 if (e.key === "Enter") handleSearch();
// //               }}
// //             />
// //             <button
// //               className="search-btn"
// //               onClick={handleSearch}
// //               disabled={loading}
// //             >
// //               {loading ? "Searching..." : "Search"}
// //             </button>
// //           </div>
// //         </div>

// //         {error && <div className="message error">{error}</div>}

// //         {employee ? (
// //           <div className="result-card">
// //             <h3 className="result-title">Employee Details</h3>
// //             <table className="result-table">
// //               <tbody>
// //                 <tr>
// //                   <th>Emp No</th>
// //                   <td>{employee.empNo}</td>
// //                 </tr>
// //                 <tr>
// //                   <th>Name</th>
// //                   <td>{employee.empName}</td>
// //                 </tr>
// //                 <tr>
// //                   <th>City</th>
// //                   <td>{employee.empCity}</td>
// //                 </tr>
// //                 <tr>
// //                   <th>Salary</th>
// //                   <td>₹{Number(employee.empSalary).toLocaleString()}</td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //         ) : (
// //           empno.trim() &&
// //           !loading &&
// //           !error && (
// //             <div className="message info">
// //               Enter employee number and click Search
// //             </div>
// //           )
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Search;



import axios from "axios";
import { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [empno, setempno] = useState("");
  const [val, setdata] = useState([]);

  const handleSearch = () => {
    let api = "https://mern-crud-ci-cd-pipeline-3.onrender.com/employees/empSearch";
    axios.post(api, { empNo: empno }).then((res) => {
      setdata(res.data.employee || []);
    });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="search-container">
      <h1>Employee Search</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Employee No"
          value={empno}
          onChange={(e) => setempno(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Name</th>
            <th>City</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {val.length > 0 ? (
            val.map((emp, index) => (
              <tr key={index}>
                <td>{emp.empNo}</td>
                <td>{emp.empName}</td>
                <td>{emp.empCity}</td>
                <td>₹ {emp.empSalary}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
