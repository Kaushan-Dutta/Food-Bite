const AuthController=require('../Controllers/authentication');
const Middleware=require('../Middleware/index');

const express=require('express');

const router=express.Router();

/* POST Methods */
router.route('/signup').post(AuthController.signup);
router.route('/login').post(AuthController.login);
router.route('/register').post(AuthController.registerMail);

/* GET Methods */
router.route('/generateOTP').get(Middleware.otpGenerator,AuthController.generateOTP)
router.route('/verifyOTP').get(AuthController.verifyOTP)
//router.route('/resetSession').get(AuthController.resetSession);

/* PUT Methods */
router.route('/resetPassword').put(AuthController.resetPassword)

module.exports = router;

