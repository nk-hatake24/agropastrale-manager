const route = require('express').Router()
const {employeeRegister, searchAllEmployee, searchOneEmployee, updateEmployee, deleteEmployee, login} = require('../controller/employeeController')


route.post("/registerEmployee", employeeRegister)
route.get("/getAllEmployee", searchAllEmployee)
route.get("/getOneEmployee", searchOneEmployee)
route.put('/updateEmployee', updateEmployee)
route.delete('/deleteEmployee', deleteEmployee)
route.post('/login', login)


module.exports = route