// we're gonna send a request to the server from outside the app - 
// no access to the source code necessary
const axios = require('axios')

//in case of a squared number, num1 and num2 will need to be set to the same integer, multiplication will be the operator as squared is a number times itself
const operator = '*'
const num1 = 5
const num2 = 5

//in the case of using modulus, num 1 and num2 can be different integers, the operator will be the modulus
//const operator = '%'
//const num1 = 5
//const num2 = 2


axios.post('http://localhost:4444/api/plugin', {
    operator: operator,
    num1: num1,
    num2: num2
})
.then((res) => {
    console.log('response: ', res.data)
})
.catch((err)=>{
    console.log('error: ', err)
})