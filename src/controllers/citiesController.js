const City = require("../models/City")

const getCities = async (req, res) => {
    try {
        const searchTerm = req.query.nombre
        if (searchTerm) {
            //const regex = new RegExp(`^${searchTerm}`, 'i')
            //const filteredCities = await City.find({ nombre: regex }) 
            const filteredCities = await City.find({ nombre: {$regex: `^${searchTerm}`, $options: 'i'} }) 
            res.status(200).json({ cities: filteredCities }) 
        } else {
            let cities = await City.find()
            res.status(200).json({ cities })  
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCity = async (req, res) => {
    try {
        const {id} = req.params
        const city = await City.findById(id)
        res.status(200).json({ city })
    } catch (error) {
        res.status(500).json({ message: error.message })  
    }
}

const addCity = async (req, res) => {
    try {
        let dataCity = req.body
        let cityCreate = await City.create(dataCity)
    
        res.status(201).json({
            message: "City has been added",
            city: cityCreate
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteCity = async (req, res) => {
    try {
        const {id} = req.params
        await City.findByIdAndDelete(id)
    
        res.status(201).json({
            message: "City has been delete",
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateCity = async (req, res) => {
    try {
        let newData = { 
            nombre: req.body.nombre,
            pais: req.body.pais,
            foto: req.body.foto,
            portada: req.body.portada,
            datos: req.body.portada
        }
        
        const {id} = req.params
        await City.findByIdAndUpdate(id, newData)

        res.status(201).json({
            message: "City has been update",
            newData
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addCitiesCollection = async (req, res) => {
    try {
        let citiesCollection = [
            {
                nombre: "New York",
                pais: "United States",
                foto: "https://i.imgur.com/U8DDeap.png",
                portada: "https://i.imgur.com/tLOxaeO.png",
                datos: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                nombre: "London",
                pais: "United Kingdom",
                foto: "https://i.imgur.com/crAvN4D.png",
                portada: "https://i.imgur.com/9fsTws0.png",
                datos: "Repudiandae architecto eius quae corrupti possimus in reiciendis magni voluptates doloribus placeat rerum voluptatem."
            },
            {
                nombre: "Paris",
                pais: "France",
                foto: "https://i.imgur.com/EU34QEz.png",
                portada: "https://i.imgur.com/bCxiuu8.png",
                datos: "Totam deleniti nisi obcaecati doloremque cumque beatae illo libero, exercitationem ipsum eveniet, ab earum! Pariatur, delectus."
            },
            {
                nombre: "Tokyo",
                pais: "Japan",
                foto: "https://i.imgur.com/OQggslf.png",
                portada: "https://i.imgur.com/ajGIhji.png",
                datos: "Itaque consectetur repudiandae provident soluta aliquid praesentium laborum ad odit amet earum magnam commodi doloribus."
            },
            {
                nombre: "Sydney",
                pais: "Australia",
                foto: "https://i.imgur.com/eJArKag.png",
                portada: "https://i.imgur.com/Y7XrCY0.png",
                datos: "Ratione neque nihil ipsam pariatur distinctio excepturi iusto deserunt obcaecati aliquid qui quas saepe sequi modi ea."
            },
            {
                nombre: "Rome",
                pais: "Italy",
                foto: "https://i.imgur.com/MJgaKGf.png",
                portada: "https://i.imgur.com/bopHbzI.png",
                datos: "Rem deserunt ex et eos? Minus incidunt, quas eveniet esse odio tempora excepturi error ipsam doloremque explicabo mollitia."
            },
            {
                nombre: "Cairo",
                pais: "Egypt",
                foto: "https://i.imgur.com/IeNEVPm.png",
                portada: "https://i.imgur.com/4CWjuZU.png",
                datos: "Magni id optio quam perspiciatis voluptates, soluta aperiam dolores. Consectetur, quas repellat."
            },
            {
                nombre: "Rio de Janeiro",
                pais: "Brazil",
                foto: "https://i.imgur.com/7ZgxiaA.png",
                portada: "https://i.imgur.com/XMrEqTm.png",
                datos: "Autem deleniti architecto nulla est porro cumque quod modi."
            },
            {
                nombre: "Beijing",
                pais: "China",
                foto: "https://i.imgur.com/gc5y5sC.png",
                portada: "https://i.imgur.com/Kq7nNgV.png",
                datos: "Dolorum minima ratione magnam tenetur fugit distinctio quaerat itaque explicabo ut esse quis, ipsum nulla, eum amet reprehenderit."
            },
            {
                nombre: "Moscow",
                pais: "Russia",
                foto: "https://i.imgur.com/yaj7r5b.png",
                portada: "https://i.imgur.com/1qbc8lo.png",
                datos: "Explicabo aliquam quas rem praesentium consectetur voluptatem accusantium libero inventore hic natus?"
            },
            {
                nombre: "Toronto",
                pais: "Canada",
                foto: "https://i.imgur.com/FIZ2Y06.png",
                portada: "https://i.imgur.com/4Pc2CdD.png",
                datos: "Possimus in reiciendis magni voluptates doloribus placeat rerum voluptatem."
            },
            {
                nombre: "Mumbai",
                pais: "India",
                foto: "https://i.imgur.com/06dgAxe.png",
                portada: "https://i.imgur.com/k8fnnny.png",
                datos: "Quas rem praesentium consectetur voluptatem accusantium libero aliquam."
            },
            {
                nombre: "Prague",
                pais: "The Czech Republic",
                foto: "https://i.imgur.com/98f5k6E.png",
                portada: "https://i.imgur.com/YkxMPhk.png",
                datos: "Tenetur fugit distinctio quaerat itaque explicabo ut esse quis, ipsum nulla, eum amet reprehenderit."
            },
            {
                nombre: "Ibiza",
                pais: "Spain",
                foto: "https://i.imgur.com/6yjZ3xI.png",
                portada: "https://i.imgur.com/Zl6DBJE.png",
                datos: "Tenetur fugit distinctio quaerat itaque explicabo ut esse quis, ipsum nulla, eum amet reprehenderit."
            },
            {
                nombre: "Mykonos",
                pais: "Greece",
                foto: "https://i.imgur.com/rrC80Y3.png",
                portada: "https://i.imgur.com/NR7gtcs.png",
                datos: "Tenetur fugit distinctio quaerat itaque explicabo ut esse quis, ipsum nulla, eum amet reprehenderit."
            },
        ]
    
        await City.insertMany(citiesCollection)

        res.status(201).json({ 
            message: "Cities collection has ben hadded successfully",
            citiesCollection 
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getCities, getCity, addCity, deleteCity, updateCity, addCitiesCollection }