const express = require('express')

const route = express.Router();

const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"innoways",
    "database":"pms"
})


route.use(bodyParser.urlencoded({extended:false}));
route.use(bodyParser.json());

route.get('/api/users', (req, res)=>{
   connection.connect();
   connection.query("select * from tbl_user",(err, rows, fields)=>{
       if(!err)
        res.send(rows)
        else
        res.send(err)
   })
  //res.send("how are you?")


   connection.end()

})

route.get('/api/user/:id',(req,res)=>{
  connection.connect();
  connection.query(`select * from tbl_user where user_name ={id}`,(err,rows,fields)=>{
    if(!err){
        res.send(rows);
    }else{
        res.send(err);
    }
  })
  connection.end();
})

route.post('/api/user',(req,res)=>{


    if(!req.body.user_name){
      // connection.connect();
      res.send('post /api/user');
    }else{
        res.status(400).send("bad request parameter")
    }
    
})
module.exports = route

