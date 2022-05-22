const mongoose=require("mongoose")
const {obj} = require("../database/database")
const userSchema=require("../database/database")

const user=mongoose.model("user",userSchema)

class userService{
    async setUser(User){
        const userObj=new user(User);
        const result=await userObj.save();
        return result;
    }
    async getUser(){
        return await user.find({})
    }
    async delUser(id){
        return await user.deleteOne({"_id":user["_id"]})
    }
}
module.exports=userService;