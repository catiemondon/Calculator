module.exports = {
    add : (req, res) => {
        const { num1, num2 } = req.body

        //a check in place to make sure parameters are integers to guarantee sum, not concatenated string
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return res.status(400).send({error:'Invalid integer type. Please use two numbers as parameters to calculate sum'})
        }

        return res.status(200).send({total: num1 + num2})
    },

    subtract : (req, res) => {
        const { num1, num2 } = req.body

         //a check in place to make sure parameters are integers to guarantee sum, not concatenated string
         if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return res.status(400).send({error:'Invalid integer type. Please use two numbers as parameters to calculate difference'})
        }

        return res.status(200).send({total: num1 - num2})
    },

    multiply: (req, res) => {
        const { num1, num2 } = req.body

        //a check in place to make sure parameters are integers to guarantee sum, not concatenated string
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return res.status(400).send({error:'Invalid integer type. Please use two numbers as parameters to calculate product'})
        }

        return res.status(200).send({total: num1 * num2})
    },

    divide: (req, res) => {
        const { num1, num2 } = req.body

         //a check in place to make sure parameters are integers to guarantee sum, not concatenated string
         if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return res.status(400).send({error:'Invalid integer type. Please use two numbers as parameters to calculate quotient'})
        }

        return res.status(200).send({total: num1 / num2})
    },

    plugin: (req, res) => {
       
        //to inject a custom mathematical operation, a developer must send 2 numbers and the mathematical operator needed to perform the operation on the body of the request
        const { operator, num1, num2 } = req.body

        //this will not run if there is no operator, num1, and num2 on body to help restrict who has access to the eval method. Typically would also add a check for authenticated/admin, but due to time, will forgoe that measure
        if(operator &&  num1 && num2){
            if(typeof operator !== 'string' || typeof num1 !== 'number' || typeof num2 !== 'number'){
                return res.status(400).send({error:'num1 and num2 must be a valid integer for the plugin to work, the operator must be a string. Please try again'})
            }
            else return res.status(200).send({ 
            //separate and restrict what is passed to eval to limit what can be evaluated, eval can be risky, even with an authenticated user
            total: eval(num1 + operator  + num2)
        })
        
        }
        else return res.status(400).send({error:'plugin failed, make sure your req.body matches our documentation specifications'})
    }
}