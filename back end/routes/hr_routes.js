let express=require('express');
let router=express.Router();
router.get("/viewemployees",(req,res)=>{
    res.send("view employee page called");
})

router.post("/assign-task",(req,res)=>{
    res.send("assigntask router called");
})

module.exports=router;
