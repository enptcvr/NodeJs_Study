const express = require('express')

const app = express()


app.use('/',require('./data/route'))

app.post("/",(req, res)=>{
    console.log("hello");
})

var port = process.env.port || 9977
app.listen(9977,(err)=>{
    if(!err){
    console.log(`server started at ${port}!`)
    }else{
        console.log(err)
    }
})

