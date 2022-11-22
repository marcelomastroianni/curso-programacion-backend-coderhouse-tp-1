const express = require('express')
const { Router } = express
const routerShoppingCart = Router()

const CreateShoppingCartDto = require('./shopping_cart.dto.js').CreateShoppingCartDto;

const ShoppingCartService = require('./shopping_cart.service.js');
const shoppingCartService = new ShoppingCartService();

const validateIfAdmin = require('./middlewares/security.middleware.js');



routerShoppingCart.post("/:id/productos", async (req, res) => {
   const { id } = req.params;
   const { product_id } = req.body;
   const response = await shoppingCartService.addProduct(Number(id), Number(product_id));

   if(response){
      res.send(response);
   }else{
      res.send({error: 'carrito de compras no encontrado'});
   }
});

routerShoppingCart.delete("/:id/productos/:product_id", async (req, res) => {
   const { id, product_id } = req.params;
   const response = await shoppingCartService.deleteProduct(Number(id), Number(product_id));
   if(response){
      res.send(response);
   }else{
      res.send({error: 'carrito de compras no encontrado'});
   }
});

routerShoppingCart.get("/:id/productos", async (req, res) => {
   const { id } = req.params;
   const response = await shoppingCartService.getProducts(Number(id));
   if(response){
      res.send(response);
   }else{
      res.send({error: 'carrito de compras no encontrado'});
   }
});


routerShoppingCart.post("/", async (req, res) => {
   const timestamp = new Date();
   const shoppingCart = new CreateShoppingCartDto(timestamp);
   const id = await shoppingCartService.create(shoppingCart);
   shoppingCart.id = id;
   res.send(shoppingCart);
});

routerShoppingCart.delete("/:id", async (req, res) => {
   const { id } = req.params;
   const deleted = await shoppingCartService.delete(Number(id));
   if (deleted) {
      res.send({description:"carrito eliminado"});
   } else {
      res.send({error: 'carrito no encontrado'});
   }
});

module.exports = routerShoppingCart
