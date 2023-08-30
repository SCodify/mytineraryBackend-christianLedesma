const { Schema, model, Types } = require('mongoose')

const schemaCity = new Schema({
    nombre: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    portada: {
        type: String,
        required: true
    },
    datos: {
        type: String,
        required: true
    },
    _itineraries: [{
        type: Types.ObjectId,
        ref: "Itinerary"
    }]
})

const City = model("City", schemaCity)

module.exports = City