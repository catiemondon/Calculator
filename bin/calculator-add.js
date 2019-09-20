#!/usr/bin/env node

const axios = require('axios')

axios.post('http://localhost:4444/api/addition', {
    num1: +process.argv[2],
    num2: +process.argv[3],
})
.then((res) => console.log(res.data.total))
.catch((error) => console.log(error.response.data.error))