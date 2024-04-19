const express = require('express')
require('dotenv').config()
const {dbConnection} =require('./src/config/dbConfig')
const cors =require('cors')
const morgan = require('morgan')
const employeeRoute = require('./src/route/employeeRoutes')



const app = express()
const port = 3500

// ********middlewares
app
.use(cors())
.options('*', cors())
.use(express.json())
.use(morgan("dev"))

// ************ db connection****************
dbConnection()


// *****************routes******************

app.use("/api/employee", employeeRoute);
app.use("*", (req,res)=>{
    res.status(404).json({message:'this routes is not found'})
})







app.listen(port, ()=> console.log(`the server is active and listening on port ${port}`))

