var express=require("express");
var bodyParse=require("body-parser");
var mongoose=require("mongoose");
const e=require("express");

const app=express()
app.use(bodyParse.json())
app.use(express.static('public'))
app.use(bodyParse.urlencoded({
    extended:true
}))


mongoose.connect('mongodb://0.0.0.0:27017/mydatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;

db.on('error',()=>console.log("error in connecting database"));
db.once('open',()=>console.log("connected to database"));

app.get("/",(req,res)=>{
    return res.redirect("index.html");
}).listen(5500);