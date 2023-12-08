const express = require("express");
const { loginController, registerController } = require("../controllers/userController");
//server created called router( like App)
const router = express.Router()

//router
//post ||Login

router.post('/login',loginController)


//post ||register
router.post('/register',registerController)