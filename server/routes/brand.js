const brandRoute = require('express').Router();
const { BrandController } = require('../controllers');

brandRoute.get('/', BrandController.getBrands);
brandRoute.get('/:id', BrandController.getBrand);

brandRoute.post('/create', BrandController.create);

brandRoute.delete('/delete/:id', BrandController.delete);

brandRoute.put('/update/:id', BrandController.update);

module.exports = brandRoute;