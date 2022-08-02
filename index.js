// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

const app = express()
// VIEW ENGINE
app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


// MIDDLEWARE
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
// Controllers & Routes
const placesControllers = require("./controllers/places")
app.use("/places", placesControllers);


app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)