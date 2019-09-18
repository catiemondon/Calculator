module.exports = {
    add : (num1, num2) => {
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return 'Please use two numbers as parameters to calculate sum'
        }
        return num1 + num2
    }
}