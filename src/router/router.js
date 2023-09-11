const express = require('express')
const router = express.Router()
const { getCities, getCity, addCity, deleteCity, updateCity, addCitiesCollection } = require('../controllers/citiesController')
const { getAllItineraries, getItineraries, getItinerary, addItinerary, deleteItinerary, updateItinerary } = require('../controllers/itinerariesController')
const authRouter = require('./auth')


router.get("/cities", getCities)
router.get("/cities/:cid", getCity)
router.post("/cities", addCity) 
router.delete("/cities/:cid", deleteCity)
router.put("/cities/:cid", updateCity)
router.post("/cities/collection", addCitiesCollection)

router.get("/itineraries/", getAllItineraries)
router.get("/itineraries/:cid", getItineraries)
router.get("/itinerary/:cid/:iid", getItinerary)
router.post("/itineraries/:cid", addItinerary)
router.delete("/itineraries/:iid", deleteItinerary)
router.put("/itineraries/:iid", updateItinerary)

router.use("/user", authRouter)

module.exports = router