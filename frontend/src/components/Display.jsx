// import { useEffect, useState } from "react";
// import axios from "axios"



// const Display=()=>{

//     const [val,setval]=useState([])

//     const loaddata=()=>{
//         let api="http://localhost:5000/employees/empDisplay";
//         axios.get(api).then((res)=>{
//             setval(res.data.employees)
             
//         })
        
//     }

//     useEffect(()=>{
//         loaddata()
//     })


// let sno=0;
//     let ans = val.map((key)=>{
//         sno++
//         return(
//             <>
//             <tr>
//                 <td>{sno}</td>
//                 <td>{key.empNo}</td>
//                  <td>{key.empName}</td>
//                   <td>{key.empCity}</td>
//                    <td>{key.empSalary}</td>
//             </tr>
            
//             </>
//         )
//     })
//     return(
//         <>
//         <h1>This is display page</h1>

//         {ans}
        
//         </>
//     )
// }

// export default Display;




import { useEffect, useState } from "react";
import axios from "axios";
// import "./Display.css"; // Import the CSS file (create this file in the same directory)

const Display = () => {
  const [val, setval] = useState([]);

  const loaddata = () => {
    let api = "https://mern-crud-ci-cd-pipeline-3.onrender.com/employees/empDisplay";
    axios.get(api).then((res) => {
      setval(res.data.employees);
    });
  };

  useEffect(() => {
    loaddata();
  }, []); // Added empty dependency array to prevent infinite calls

  let sno = 0;
  let ans = val.map((key) => {
    sno++;
    return (
      <tr key={key.empNo}> {/* Added key for better React performance */}
        <td>{sno}</td>
        <td>{key.empNo}</td>
        <td>{key.empName}</td>
        <td>{key.empCity}</td>
        <td>{key.empSalary}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="container">
        <h1 className="title">Employee Directory</h1>

        <div className="table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Emp No</th>
                <th>Name</th>
                <th>City</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>{ans}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Display;