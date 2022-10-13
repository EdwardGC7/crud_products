const uuid = require('uuid')
const Products = require("../models/products.models");


//Hace un return de todos los productos
const getAllProducts = () => {
  const data = Products.findAll(); 
  return data;
}

//Hace un return de un producto basado en un id determinado
const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id,
    },
  });

  return data; 
};

//Crea un nuevo producto en la "base de datos"
const createProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable,
  });

  return newProduct;
};

//Edita un producto existente
const editProduct = async (id, data) => {
  const response = await Products.update(data, {
    where: {
      id: id,
    },
  });
  return response;
};

//Eliminar un producto
const deleteOneProduct = async (id) => {
  const data = await Products.destroy({
      where: {
          id: id
      }
  })
  return data
}



module.exports = { getAllProducts, getProductById, createProduct, editProduct, deleteOneProduct}