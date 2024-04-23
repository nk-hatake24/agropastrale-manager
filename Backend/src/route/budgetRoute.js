const route = require('express').Router()
const { addBudget, updateBudget, deleteBudget} = require('../controller/budgetController')

route.post('/', addBudget)
route.put('/:id_budget', updateBudget)
route.delete('/:id', deleteBudget)

module.exports = route