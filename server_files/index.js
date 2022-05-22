const express=require("express")
const mongoose=require("mongoose");
const app=express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) => {
    res.send("<h2> Home Page </h2>")
})
app.use('/bday',require("./routes/routes"))
app.listen(3000,(e)=>{
    mongoose.connect("mongodb://localhost/practise").then((result)=>{
        console.log("database connected")
    }).catch((e)=>{
        console.log("failed")
    })

})