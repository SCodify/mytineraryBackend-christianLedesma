const express = require('express')
const router = express.Router()
const { getCities, getCity, addCity, deleteCity, updateCity, addCitiesCollection } = require('../controllers/citiesController')


router.get("/api/cities", getCities)
router.get("/api/cities/:id", getCity)
router.post("/api/cities", addCity) 
router.delete("/api/cities/:id", deleteCity)
router.put("/api/cities/:id", updateCity)
router.post("/api/cities/collection", addCitiesCollection)

module.exports = router