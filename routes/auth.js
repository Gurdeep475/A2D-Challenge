const router = require("express").Router();
const authController = require("../controllers/auth");
const {usernameValidation,passwordValidation} = require("../validators")

router.post("/register",usernameValidation,passwordValidation,authController.register);

router.post("/login",usernameValidation,passwordValidation,authController.login);

router.post("/changepassword",passwordValidation,authController.changePassword);

module.exports = router;