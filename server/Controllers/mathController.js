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
    }
}