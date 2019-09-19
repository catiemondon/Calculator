// const math_functions = require('./mathController')

// test('Error string is returned if parameters are not both integers', () => {
//     expect(math_functions.add(2, 'lkhoih')).toEqual('Please use two numbers as parameters to calculate sum')
// })

// test('Error string is returned if only one parameter', () =>{
//     expect(math_functions.add(2)).toEqual('Please use two numbers as parameters to calculate sum')
// })

// test('Adds two and two to return 4', () => {
//     expect(math_functions.add(2, 2)).toBe(4)
// })

// test('Adds negative seven and four to return negative three', () => {
//     expect(math_functions.add(-7, 4)).toBe(-3)
// })

// test('Adds three-point-seven and two-point-three to return six', () => {
//     expect(math_functions.add(3.7, 2.3)).toBe(6)
// })

//moved tests to postman testing for endpoint test functionality on step 2, can run tests in terminal using newman. Newman is project dependency, npm i, then use command newman run ```path to Calculator.postman_collection.json```