const express=require('express');
const AdminControllers=require('../Controllers/admin');
const AuthController=require('../Controllers/authentication');

const router=express.Router();

router.route('/admin').get(AdminControllers.getAdminDetails);
router.route('/admin/orders').get(AdminControllers.getOrders);
router.route('/inventories').get(AdminControllers.getInventories);

router.route('/admin/createOffer').post(AuthController.verifyToken,AdminControllers.updateOffer);
router.route('/admin/createInventory').post(AuthController.verifyToken,AdminControllers.createInventories);
router.route('/admin/createPizza').post(AuthController.verifyToken,AdminControllers.createPizza);

router.route('/admin/updateOrder').put(AuthController.verifyToken,AdminControllers.updateOrder);
router.route('/admin/updateInventory').put(AuthController.verifyToken,AdminControllers.updateInventories);


module.exports = router;

