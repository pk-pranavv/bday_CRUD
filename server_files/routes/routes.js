const express = require("express");
const { route } = require("express/lib/application");
const UserService = require("../services/services");
const router=express.Router();

router.post("/add",async (req,res)=>{
    const user=new UserService();
    const result=await user.setUser(req.body)
    res.send(result);
})
router.get("/get",async (req,res)=>{
    const user=new UserService();
    const result=await user.getUser()
    res.send(result);
})
router.delete("/delete/:id", async (req,res)=>{
    const user=new UserService();
    const result=await user.delUser(req.params.id)
    res.send(result);
})

module.exports=router;


