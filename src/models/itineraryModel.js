const { Schema, model, Types } = require('mongoose')

const schemaItinerary = new Schema({
    titulo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    duracion: {
        type: Number,
        required: true
    },
    likes: {
        type: [String],
        required: true
    },
    hashtags: {
        type: [String],
        required: true
    },
    comentarios: {
        type: [String]
    },
    _city: {
        type: Types.ObjectId,
        ref: "City"
    }
},
{
    timestamps: true
})

const Itinerary = model("Itinerary", schemaItinerary)

module.exports = Itinerary