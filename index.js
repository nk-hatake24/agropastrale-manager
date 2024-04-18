const express = require('express')
require('dotenv')
const app = express()
const port = 3500 

app.listen(port, ()=> console.log(`the server is active an listening on port ${port}`))