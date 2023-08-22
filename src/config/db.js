require('dotenv').config()
const { connect } = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

const connectDB = () => {
    connect(MONGO_URI)
    .then(() => {
        console.log("Successfully connected to the database")
    })
    .catch((err) => {
        console.log(`Error connecting to database: ${err}`)
    })
}

connectDB()