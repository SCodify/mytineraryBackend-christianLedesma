const express = require('express')
const { register, login, authenticated } = require('../controllers/authController')
const { verifyAuthData, verifyAuthDataLogin } = require('../middlewares/verifications')
const { passportVerifycator, hashPassword, varifyUserExists, verifyPassword, generateToken } = require('../middlewares/auth')
 
const authRouter = express.Router()
 
authRouter.post("/register", verifyAuthData, hashPassword, register)
authRouter.post("/login", verifyAuthDataLogin, varifyUserExists, verifyPassword, generateToken, login)
authRouter.post("/authenticated", passportVerifycator.authenticate("jwt", {session: false}), generateToken, authenticated  )

module.exports = authRouter