const express = require('express');
const router = express.Router();
const userModule = require('../controllers/usersCtrl');
const awaitHandlerFactory =require('./errorHandlling');

router.post('/createUser', awaitHandlerFactory(userModule.createUser));
router.post('/loginUser', awaitHandlerFactory(userModule.loginUser));
router.get('/getUserDetails',awaitHandlerFactory(userModule.getUserDetails.bind(userModule)));
router.post('/updateUser', awaitHandlerFactory(userModule.updateUserDetails));
router.post('/deleteUser', awaitHandlerFactory(userModule.deleteUser));
router.post('/sendEmailVerification', userModule.sendEmailVerification);

module.exports = router;