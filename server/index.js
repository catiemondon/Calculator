require('dotenv').config()
const express = require('express')
const math_ctrl = require('./Controllers/mathController')

const app = express()

const { SERVER_PORT } = process.env

app.use(express.json())

//Typically would use apache JMeter to test number of requests these endpoints could handle, but due to time, only did unit testing

app.post('/api/addition', math_ctrl.add)
app.post('/api/subtraction', math_ctrl.subtract)
app.post('/api/multiplication', math_ctrl.multiply)
app.post('/api/division', math_ctrl.divide)
app.post('/api/plugin', math_ctrl.plugin)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})