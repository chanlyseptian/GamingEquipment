const memberRoute = require('express').Router();
const {MemberController} = require('../controllers');

memberRoute.get('/', MemberController.getMembers);
memberRoute.get('/:id', MemberController.getMember);

memberRoute.post('/create', MemberController.create);

memberRoute.delete('/delete/:id', MemberController.delete);

memberRoute.put('/update/:id', MemberController.update);

module.exports = memberRoute;