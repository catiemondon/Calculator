#!/usr/bin/env node

const axios = require('axios')

axios.post('http://localhost:4444/api/plugin', {
    num1: +process.argv[2],
    operator: `${process.argv[3]}`,
    num2: +process.argv[4],
})
.then((res) => console.log(res.data.total))
.catch((error) => console.log(error.response.data.error))