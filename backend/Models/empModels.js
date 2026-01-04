

const mongoose =require("mongoose");


const EmpSchema = new mongoose.Schema({
    empNo:{
       type:Number,
       require:true 
    },

    empName:{
       type:String,
       require:true 
    },

    empCity:{
       type:String,
       require:true 
    },

    empSalary:{
       type:String,
       require:true 
    },
})

module.exports = mongoose.model("emp",EmpSchema)