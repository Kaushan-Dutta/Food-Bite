const express=require('express');
const UserControllers=require('../Controllers/user');
const AuthController=require('../Controllers/authentication');

const router=express.Router();

router.route('/:username').get(UserControllers.getUserDetails);
router.route('/:username/getcustomPizza').get(UserControllers.getCustomPizzas);
router.route('/:username/orders').get(UserControllers.userOrders);

router.route('/:username/createcustomPizza').post(AuthController.verifyToken,UserControllers.createCustomPizzas);
router.route('/:username/addFavourite').post(AuthController.verifyToken,UserControllers.addtoFavourite);
router.route('/:username/makeOrder').post(AuthController.verifyToken,UserControllers.makeOrder);


module.exports = router;

