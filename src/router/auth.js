const express = require('express')
const { register, login } = require('../controllers/authController')
const { verifyAuthData, verifyAuthDataLogin } = require('../middlewares/verifications')
const { hashPassword, varifyUserExists, verifyPassword, generateToken } = require('../middlewares/auth')
 
const authRouter = express.Router()
 
authRouter.post("/register", verifyAuthData, hashPassword, register)
authRouter.post("/login", verifyAuthDataLogin, varifyUserExists, verifyPassword, generateToken, login)

module.exports = authRouter