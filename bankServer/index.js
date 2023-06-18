//import express
const express=require('express')

//import cors
const cors=require('cors')

//import logic file
const logic=require('./service/logic')


//server creation
const server=express()

//incoming json type data  convert to js
server.use(express.json())

//connect front-end
server.use(cors({origin:'http://localhost:4200'}))



//set port
server.listen(3000,()=>{
    console.log("_____server started at port 3000_____");
})

//server api resolve checking
// server.get('/getexc',(req,res)=>{
//     res.send(".....get request...")
// }) 
// server.get('/getexc2',(req,res)=>{
//     res.send("get request 2")
// })


//register  - post

server.post('/register',(req,res)=>{
    logic.register(req.body.acno,req.body.psw,req.body.uname).then(result=>{
        //convert js to json and send as response
        res.status(result.statusCode).json(result)
    })
})

//login - post
server.post('/login',(req,res)=>{
    logic.login(req.body.acno,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)
    })

})





//register - post  -> data is given to the database
//login  - post  -> acc no and data must be checked if it is correct 
//get user data  - get  -->
//balance        - get
//transfer       - post
//transaction history  - get
//ac delete   - delete