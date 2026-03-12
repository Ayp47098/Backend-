const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("server is ready")
})
app.get('api/rap',(req,res)=>{
    const rap = [
        {
            rep:"yoy are hero",
            cap:"no cap"
        },
        {
            rep:"yoy are hero",
            cap:"no cap"
        }
    ]
    res.json(rap)
})
const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`serve at https://localhost:${port}`);
    
})