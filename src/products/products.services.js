const { getAllProducts, getProductById, createProduct, editProduct, deleteOneProduct} = require('./products.controllers')

//Peticion optener los productos
const getProducts = (req, res) => {

  getAllProducts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
}

//Peticion optener un unico producto
const getOneProduct = (req, res) => {
  const id = req.params.id;

    getProductById(id)
        .then(data => {
          if(data){
            res.status(200).json(data)
          }else {
            res.status(404).json({message: 'Invalid ID'})
          }
        })
        .catch(err => {
            res.status(404).json({message: err.message})
        })
}

//Peticion crear un nuevo producto
const createNewProduct = (req, res) => {
  const productInfo = req.body

  if(productInfo){
    const data = createProduct(productInfo)
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'No data found to create new product'})
  }
}

//editar producto
const patchProduct = (req, res) => {
  const id = req.params.id 
  const {name, category, price, isAvailable} = req.body;

  editProduct(id, {name, category, price, isAvailable})
    .then((response) => {
      if(response[0]){
        res.status(200).json({
          message: `Product with id: ${id}, edited succesfully!`
        })
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(error => {
      res.status(400).json({message: error.message})
    })
}

//eliminar producto
const deleteProduct = (req, res) => {
  const id = req.params.id
  deleteOneProduct(id)
    .then((response) => {
      if(response){
        res.status(204).json()
      }else{
        res.status(400).json({message: 'Invalid ID'})
      }
    })
    .catch(err=> {
      res.status(400).json(err)
    })
}

module.exports = { getProducts, getOneProduct, createNewProduct, patchProduct, deleteProduct }