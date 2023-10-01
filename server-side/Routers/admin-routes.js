const express=require('express');
const AdminControllers=require('../Controllers/admin');
const AuthController=require('../Controllers/authentication');

const router=express.Router();

router.route('/').get(AdminControllers.getAdminDetails);
router.route('/orders').get(AdminControllers.getOrders);
router.route('/inventories').get(AdminControllers.getInventories);

router.route('/createOffer').post(AuthController.verifyToken,AdminControllers.updateOffer);
router.route('/createInventory').post(AuthController.verifyToken,AdminControllers.createInventories);
router.route('/createPizza').post(AuthController.verifyToken,AdminControllers.createPizza);

router.route('/updateOrder').put(AuthController.verifyToken,AdminControllers.updateOrder);
router.route('/updateInventory').put(AuthController.verifyToken,AdminControllers.updateInventories);


module.exports = router;

