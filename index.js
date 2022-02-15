require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/*', (req, res) => {
    res.status(404).send('<h1>404 page</h1>')
})
app.listen(process.env.PORT)