require('dotenv').config()
const express = require('express')
const math_ctrl = require('./Controllers/mathController')

const app = express()

const { SERVER_PORT } = process.env

app.use(express.json())

app.post('/api/addition', math_ctrl.add)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})