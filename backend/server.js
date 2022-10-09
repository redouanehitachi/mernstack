const express=require('express')
const  mongoose  = require('mongoose')
const PORT=4000|process.env.PORT_LOCAL
const workoutRoute=require('../backend/routes/workoutRoute')
require('dotenv').config()
const cors=require('cors')


// 
app=express()

// midleware
app.use(express.json())
app.use(cors())
app.use('/api/workout',workoutRoute)


// CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    console.log('you are connected to db')
    app.listen(PORT,()=>{console.log(`serever runing on port ${PORT}`)})

}).catch((err)=>{
    console.log(err)

})


//  lisening to server
