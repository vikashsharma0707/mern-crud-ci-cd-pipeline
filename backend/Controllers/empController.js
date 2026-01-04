
const empModel = require("../Models/empModels");

const empDisplay=async(req,res)=>{
    try {

        const data = await empModel.find();


        res.status(200).json({
        employees:data,

        })
        
    } catch (error) {

        console.error("error fetcing display data",error);
        res.status(500).json({messege:"server error",error:error.messege});
        
    }

}

const empInsert = async(req,res)=>{
 try {
    const {empNo,empName,empCity,empSalary} = req.body;

    const data =  await empModel.create({
        empNo:empNo,
        empName:empName,
        empCity:empCity,
        empSalary:empSalary
    })



    res.status(200).json({
        messege:"data insert sucessfully",
        employee:data
    })
 } catch (error) {
    console.error("error fetching inserting data",error);
    res.status(500).json({messege:"server error",error:error.messege})
 }
}


const empSearch=async(req,res)=>{
    try {

        const {empNo} = req.body;

        const data = await empModel.find({empNo:empNo})
        res.status(200).json({
            messege:"data found",
            employee:data
        })
        
    } catch (error) {
        console.error("error fetching searching  data",error);
    res.status(500).json({messege:"server error",error:error.messege})
        
    }

}


const empDelete=async(req,res)=>{
try {
    const {id} = req.body;

    const data = await empModel.findByIdAndDelete(id)


    res.status(200).json({
        messege:"data deleted",
        employee:data


    })




} catch (error) {
     console.error("error fetching deleting data",error);
    res.status(500).json({messege:"server error",error:error.messege})
}
}



const empEdit = async(req,res)=>{
    try {
        const myid =req.body.id;
        const data = await empModel.findById(myid)

        res.status(200).json({
            messege:"data found",
            employee:data
        })
        
    } catch (error) {

console.error("error fetching find by id data",error);
    res.status(500).json({messege:"server error",error:error.messege})
        
    }
}


const empUpdate = async(req,res)=>{
    try {

        const {_id,empNo,empName,empCity,empSalary} = req.body;
        const data = await empModel.findByIdAndUpdate(_id,{
            empNo:empNo,
            empName:empName,
            empCity:empCity,
            empSalary:empSalary
        })

        res.status(200).json({
            messege:"data updated",
            employee:data

        })


        

        
    } catch (error) {
        console.error("error fetching update data",error);
    res.status(500).json({messege:"server error",error:error.messege})
    }

}


const empView=async(req,res)=>{
    try {
        const myid = req.body.id;
        const data = await empModel.findById(myid);


        res.status(200).json({
            messege:"data found",
            employee:data
        })
    } catch (error) {
          console.error("error find by id deleting data",error);
    res.status(500).json({messege:"server error",error:error.messege})
    }
}


module.exports={
    empDisplay,
    empInsert,
    empSearch,
    empDelete,
    empEdit,
    empUpdate,
    empView
}