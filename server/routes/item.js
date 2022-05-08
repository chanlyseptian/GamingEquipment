const itemRoute = require('express').Router();
const {ItemController} = require('../controllers');

itemRoute.get('/', ItemController.getItems);
itemRoute.get('/:id', ItemController.getItem);

itemRoute.post('/create', ItemController.create);

itemRoute.delete('/delete/:id', ItemController.delete);

itemRoute.put('/update/:id', ItemController.update);

module.exports = itemRoute;