const route = require('express').Router()

const {addSupplier, getAllSuppliers, updateSupplier} = require('../controller/supplierContoller')

route.post('/', addSupplier)
route.put('/:id_supplier', updateSupplier)
route.get('/', getAllSuppliers)


module.exports = route