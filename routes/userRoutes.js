const express =require('express')
const router = express.Router();
const userController =require('../controller/userControlller');


//routes for User
router.post('/users',userController.createUser);
router.get('/users',userController.getUser);
router.get('/users/:id',userController.getuserByid);
router.put('/users/:id',userController.updateuserByid);
router.delete('/users/:id',userController.deleteUser)


module.exports =router