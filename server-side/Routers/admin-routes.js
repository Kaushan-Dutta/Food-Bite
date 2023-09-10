const express=require('express');
const AdminControllers=require('../Controllers/admin');
const AuthController=require('../Controllers/authentication');

const router=express.Router();

router.route('/:adminame').get(AuthController.verifyToken,AdminControllers.getAdminDetails);
router.route('/:adminame/orders').get(AdminControllers.getOrders);
router.route('/:adminame/inventories').get(AdminControllers.getInventories);

router.route('/:admin/createOffer').post(AdminControllers.updateOffer);

router.route('/:admin/updateOrder').put(AdminControllers.updateOrder);

module.exports = router;

