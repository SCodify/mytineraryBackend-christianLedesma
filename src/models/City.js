const { Schema, model } = require('mongoose')

const schemaCity = new Schema({
            nombre: {
                type: String,
                require: true
            },
            pais: {
                type: String,
                require: true
            },
            foto: {
                type: String,
                require: true
            },
            portada: {
                type: String,
                require: true
            },
            datos: {
                type: String,
                require: true
            }
    })

const City = model("City", schemaCity)

module.exports = City