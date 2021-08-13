const express = require('express')

const app = express()


app.use('/',require('./data/route'))

app.post("/",(req, res)=>{
    console.log("hello");
})

app.listen(9977,(err)=>{
    if(!err){
    console.log("server started!")
    }else{
        console.log(err)
    }
})
