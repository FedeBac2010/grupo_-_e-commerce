const express = require('express');
const router = express.Router();
const productsController = require('../Controllers/productsController')


/* RUTA A TODOS LOS PRODUCTOS */
router.get("/catalog", productsController.catalog);

router.get("/catalog-ebook", productsController.catalogebook);

/* RUTA DE DETALLE DE PRODUCTO POR ID */

router.get('/detalle-producto/:id', productsController.detalle);

/* RUTA DE CREACION DE PRODUCTO */

router.get("/create", productsController.create);
router.post("/create", productsController.storeProduct)

/* RUTA EDICION DE PRODUCTO */

router.get("/edit/:id", productsController.edit);
router.put("/:id",productsController.updateProduct)

/* RUTA PARA ELIMINAR UN PRODUCTO */
router.delete('/:id', productsController.deleteProduct)

/* RUTA A CARRITO DE PRODUCTOS */

router.get('/cart', productsController.cart);








module.exports = router;

