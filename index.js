const dotenv=require("dotenv")
const express=require("express")

const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/twitter",(req,res)=>{
    res.send("aayushdotcom")
})
app.get("/login",(req,res)=>{
    res.send("<h1> please login at our website</h1>")
})
app.get("/youtube",(req,res)=>{
    res.send("<h2> this is our youtube</h2>")
})
app.listen(process.env.PORT,()=>{
    console.log(`Example port listening on port ${port}`);
    
})