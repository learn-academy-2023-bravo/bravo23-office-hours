// TEMPLATES
// Template of a test
// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// Template of a function
// const greeter = () => {
//   return "Hello, LEARN student!"
// }

// Template for pseudocode
// Function Signature
// input: number
// output: string indicating allowed, denied, or error

// input: 39
// output: "Cannot ride the rollercoaster"

// Process
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error


// PROMPTS
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// describe(name of function as a string, callback function)
  // it(description of the function as a string, callback function)
    // expect statement with the function call and the jest matcher with the expected output
describe("doubler", () => {
  it("takes a number and returns the result of the number multiplied by 2", () => {
    expect(doubler(6)).toEqual(12)
  })
})

// Good failure:
  // FAIL  ./week.test.js
  // doubler
  //   ✕ takes a number and returns the result of the number multiplied by 2 (1 ms)

  // ● doubler › takes a number and returns the result of the number multiplied by 2

  //   ReferenceError: doubler is not defined

// Create the function that will make the test pass.

// Pseudocode
  // input: number
  // output: number multiplied two

  // input: 6
  // output: 12

  // Process:
  // Create a function named doubler that takes a number and returns the result of the number multiplied by 2
  // return number multiplied by 2

  // Function
  const doubler = (number) => {
    return number * 2
  }

  // Passing
    //  PASS  ./week.test.js
    // doubler
    // ✓ takes a number and returns the result of the number multiplied by 2 
    
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () => {
  it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other", () => {
    expect(multiply(3, 9)).toEqual(27)
  })
})

//output:
//  FAIL  ./week.test.js
//   doubler
//   ✓ takes a number and returns the result of the number multiplied by 2 (1 ms)
// multiply
//   ✕ takes two numbers as arguments and logs the result of one of the numbers multiplied by the other

// ● multiply › takes two numbers as arguments and logs the result of one of the numbers multiplied by the other

//   ReferenceError: multiply is not defined 
// Create the function that will make the test pass.

// Pseudocode:
// input: 2 numbers names num1 and num2
// output: product of 2 numbers multiplied by each other 

// input: 3 and 9
// output: 27

// Process
// Create a function called multiplied that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other
// return a number multiplied by another number

const multiply = (num1, num2) => {
  return num1 * num2
}
// //  PASS  ./week.test.js
//   doubler
//   ✓ takes a number and returns the result of the number multiplied by 2 (1 ms)
// multiply
//   ✓ takes two numbers as arguments and logs the result of one of the numbers multiplied by the other (1 ms)

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () => {
  it("takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'", () => {
    expect(divisibleBy(10, 5)).toEqual('10 is evenly divisible by 5')
    expect(divisibleBy(12, 2)).toEqual('12 is evenly divisible by 2')
    expect(divisibleBy(10, 3)).toEqual('10 is not evenly divisible by 3')
  })
})

// Failing!!!
// FAIL  ./week.test.js
// doubler
//   ✓ takes a number and returns the result of the number multiplied by 2 (1 ms)
// multiply
//   ✓ takes two numbers as arguments and logs the result of one of the numbers multiplied by the other
// divisibleBy
//   ✕ takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'

// ● divisibleBy › takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'

//   ReferenceError: divisibleBy is not defined

// Create the function that will make the test pass.
// Pseudocode
  // input: two numbers named num3 and num4
  // output: string that states that the 1st number is evenly divisible by the second number

  // input: 10 and 5
  // output: '10 is evenly divisible by 5'

  // input: 12 and 2
  // output: '12 is evenly divisible by 2'

  // Process:
  // Create a function named divisibleBy takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'
  // use modulo operator to determine if the first number is evenly divisible by the second by looking at the remainder of the first number divided by the second number
  // research
  // console.log(10 % 5) // output: 0
  // console.log(10 % 3)  // output: 1
  // console.log(3 % 10)  // output: 3

  // if there is a remainder then the number is evenly divisible by the other number
  // since there are two different outcomes, use two different conditions with separate outputs

  // input: 10 and 3
  // output: '10 is not evenly divisible by 3'

  // using string interpolation to create the statement that will reference the parameters to obtain the values of each number

// FUNCTION
const divisibleBy = (num3, num4) => {
  if( num3 % num4 === 0) {
    return `${num3} is evenly divisible by ${num4}`
  } else {
    return `${num3} is not evenly divisible by ${num4}`
  }
}


// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.