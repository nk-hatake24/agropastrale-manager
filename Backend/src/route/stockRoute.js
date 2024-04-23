const route = require('express').Router()
const {addStock,updateStock,getAllStocks} =require('../controller/stockController')

route.get('/', getAllStocks)
route.post('/', addStock)
route.put('/:id_stock', updateStock)

module.exports = route