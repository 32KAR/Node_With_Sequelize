const express = require('express');
const router = express();
const upload = require('../../service/multer');
const passport = require('passport');
const { validator } = require('../../helper/validator');
const validate = require('../../validation/userValidation');

const authController = require("../../controllers/userController");

const { generateToken } = require("../../helper/generateToken");

//This API is used for registration.
router.post("/registration", upload.single('profileImage'), validator.body(validate.registerValidate), authController.registration);

//This API is used for login.
router.post("/loginUser", generateToken, validator.body(validate.loginValidate), authController.authUser);

//This API is used for viewing profile.
router.get("/viewProfile", passport.authenticate('jwt', { session: false }), authController.viewProfile);

//This API is used for update profile.
router.put("/updateProfile", passport.authenticate('jwt', { session: false }), upload.single('profileImage'), validator.body(validate.profileValidate), authController.updateProfile);

//This API is used for reset password.
router.put("/resetPassword", passport.authenticate('jwt', { session: false }), upload.single('profileImage'), validator.body(validate.resetPasswordValidate), authController.resetPassword);

module.exports = router;