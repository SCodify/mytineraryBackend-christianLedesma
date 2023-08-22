require('dotenv').config()
// Para que levante la variable de entorno tengo que ejecutar nodemon en el nivel que se encuetre el archivo .env en el arbol de directorios.
// Si el archivo .env se encuentra en la raíz de mi proyecto hay que ejecutar nodemon ./src/app.js
// Se el archivo .env se encuentra dentro de src hay que ejecutar cd src && nodemon app.js

const express = require("express")
const router = require('./router/router')
const cors = require('cors')
require('./config/db')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/", router)

app.listen(port, () => {
    console.log(`Serever running at port ${port}`);
})    