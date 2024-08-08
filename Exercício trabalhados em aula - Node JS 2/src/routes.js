const { Router } = require('express')
const { createProductController } = require('../../controller/createProductController')
const { findProductByIdController } = require('../../controller/findProductByIdController')

const routes = Router()

routes.post('/product', createProductController)
routes.get('/product/:id', findProductByIdController)

module.exports = routes