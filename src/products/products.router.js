const router = require('express').Router()
const productsServices = require('./products.services')

//Manejo de las rutas disponibles
router.get('/', productsServices.getProducts)
router.post('/', productsServices.createNewProduct)
router.get('/:id', productsServices.getOneProduct)
router.delete('/:id', productsServices.deleteProduct) 
router.patch('/:id', productsServices.patchProduct)


module.exports = router
