// // const express = require("express");

// // const app = express();

// // app.get("/",(req,res)=>{
// //     res.send("server is running")
// // })


// // app.listen(8000,(req,res)=>{
// //     console.log("server is running on port ")
// // })

// // http://localhost:8000/



// const express = require("express");

// const app = express();
// const cors =require("cors")
// // const mongoose = require("mongoose")
// require("dotenv").config();

// app.use(cors())
// app.get("/",(req,res)=>{
//     res.send("server is running")
// })


// // mongoose.connect(process.env.)

// const port = process.env.PORT || 8000


// app.listen(port,(req,res)=>{
//     console.log(`server is running on port ${port}`)
// })



// const express = require("express");

// const app = express();
// const cors = require("cors");
// // const mongoose = require("mongoose")
// require("dotenv").config();

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("server is running");
// });

// // mongoose.connect(process.env.)

// const port = process.env.PORT || 8000;

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });
// http://localhost:5000/





//for data base

// const express = require("express");

// const app = express();
// const cors = require("cors");
// const { default: mongoose } = require("mongoose");
// // const mongoose = require("mongoose")
// require("dotenv").config();

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("server is running");
// });

// // mongoose.connect(process.env.)

// mongoose.connect(process.env.DBCONNECTION).then(()=>{
//     console.log("port is working")
// })

// const port = process.env.PORT || 8000;

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });





const express = require("express");

const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const empRoute = require("./Routes/empRoutes")

const bodyParser = require('body-parser');
// const mongoose = require("mongoose")
require("dotenv").config();

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

// mongoose.connect(process.env.)

mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("port is working")


})

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;


app.use("/employees",empRoute);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});