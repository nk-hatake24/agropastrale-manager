const route = require('express').Router()

const {addTransaction, updateTransaction} = require('../controller/transactionsController')

route.post('/', addTransaction)
route.put('/:id_transtion', updateTransaction)

module.exports = route