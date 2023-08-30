const City = require("../models/cityModel")
const Itinerary = require("../models/itineraryModel")

const getAllItineraries = async (req, res) => {
    try {
        const itineraries = await Itinerary.find().populate("_city")
        res.status(200).json({ itineraries })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getItineraries = async (req, res) => {
    try {
        let { cid } = req.params
        const cityFound = await City.findById(cid)
        if(cityFound) {
            const itineraries = await Itinerary.find({_city: cid}).populate("_city")
            res.status(200).json({ itineraries })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getItinerary = async (req, res) => {
    try {
        let { cid } = req.params
        const cityFound = await City.findById(cid)
        if(cityFound) {
            let { iid } = req.params
            const itinerary = await Itinerary.findById(iid).populate("_city")
            res.status(200).json({ itinerary })
        }        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addItinerary = async (req, res) => {
    try {
        let { cid } = req.params
        const cityFound = await City.findById(cid)
        
        if(cityFound) {
            const dataItinerary = req.body
            const newItinerary = await Itinerary.create({...dataItinerary, _city: cityFound})
            await cityFound.updateOne({ _itineraries: [ ...cityFound._itineraries, newItinerary ] })
        }
        
        const cityFoundUpdate = await City.findById(cid).populate("_itineraries")

        res.status(201).json({
            message: "Itinerary has been added",
            Itinerary: cityFoundUpdate
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteItinerary = async (req, res) => {
    try {
        const {iid} = req.params
        await Itinerary.findByIdAndDelete(iid)
        res.status(201).json({
            message: "Itinerary has been delete",
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateItinerary = async (req, res) => {
    try {
        let newData = req.body
        
        const {iid} = req.params
        await Itinerary.findByIdAndUpdate(iid, newData)

        res.status(201).json({
            message: "Itinerary has been update",
            newData
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllItineraries, getItineraries, getItinerary, addItinerary, deleteItinerary, updateItinerary }