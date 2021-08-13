const express = require('express')

const app = express()

app.use('/',require('./data/route'))

app.get("/",(req, res)=>{
    res.send("<h1>Hello guys welcome to my nodejs study course!</h1>")
})

var port = process.env.port || 9977
app.listen(port,(err)=>{
    if(!err){
    console.log(`server started at ${port}!`)
    }else{
        console.log(err)
    }
})

