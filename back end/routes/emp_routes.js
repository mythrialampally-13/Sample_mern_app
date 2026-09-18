let express=require('express');
let router=express.Router();
router.post("/register",(req,res)=>{
    res.send("view register page called");
})

router.post("/login",(req,res)=>{
    res.send("login router called");
})