const express = require('express')
require('dotenv').config()
const {dbConnection} =require('./src/config/dbConfig')
const cors =require('cors')
const morgan = require('morgan')


const app = express()
const port = 3500 

app
.use(cors())
.options('*', cors())
.use(express.json())
.use(morgan("dev"))

dbConnection()



app.listen(port, ()=> console.log(`the server is active an listening on port ${port}`))

