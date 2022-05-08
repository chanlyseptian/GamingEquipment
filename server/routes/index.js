const route = require('express').Router()

route.get('/', (req, res) => {
    res.json({
        message: "Home Page"
    })
})

const memberRoutes = require('./member');
const brandRoutes = require('./brand');
const itemRoutes = require('./item');

route.use('/members', memberRoutes);
route.use('/brands', brandRoutes);
route.use('/items', itemRoutes);


module.exports = route;