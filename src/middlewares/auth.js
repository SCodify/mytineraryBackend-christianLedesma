require('dotenv').config()
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const hashPassword = (req, res, next) => {
  try {
    const plainPassword = req.body.password
    const hashPassword = bcrypt.hashSync(plainPassword, 10)

    req.body.password = hashPassword

    next()
  } catch (error) {
    res.status(500).json({ error })
  }
}

const verifyPassword = (req, res, next) => {
  const passwordPlain = req.body.password
  const hashPassword = req.user.password
  const isValid = bcrypt.compareSync(passwordPlain, hashPassword)
  

  if(isValid){
    next()
  } else {
    res.status(400).json({
      message: ["Wrong password"]
    })
  }
}

const varifyUserExists = async (req, res, next) => {
  const { email } = req.body
       
  const userFound = await User.findOne({ email: email })    

  if(userFound){
    req.user = userFound
    next()
  } else {
    return res.status(400).json({
      message: ["User not found"]
    })
  }
}

const generateToken = (req, res, next) => {
  try {
    const secretKey = process.env.JWT
    const token = jwt.sign({email: req.body.email}, secretKey, {expiresIn: 60*3})

    req.token = token

    next()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { hashPassword, verifyPassword, varifyUserExists, generateToken }