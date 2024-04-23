const route = require('express').Router()
const {employeeRegister, searchAllEmployee, searchOneEmployee, updateEmployee, deleteEmployee, login} = require('../controller/employeeController')


route.post("/", employeeRegister)
route.get("/", searchAllEmployee)
route.get("/:email", searchOneEmployee)
route.put('/:email', updateEmployee)
route.delete('/:email', deleteEmployee)
route.post('/login', login)


module.exports = route