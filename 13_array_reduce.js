//What is reduce?

// The reduce() method is used to calcuate a singel value from an array.
// You reduce an array into a single value

// Reduce example: sum

// We can reduce the array [5, 10, 5] to the number 20.
// We can reduce the array [2, 4, 3] to the number 9.

// This is one of the most comon use cases of reduce(), which is usmming the array items.

// the reduce() method accepts the reducer which is a callback that you have to write.
// That callback can be sum, multiplicaiton, or some other logic that you may think of.

// so reduce is generic function that will reduce an array into a single value.  the way it will reduce that array into a singel value is configurable by you, the developer.
// You can configure that in the redducer callback.

// The reduce() method is used to calculate a singel value from an array.
// In other terms, the reduce() method reduces an array into a single value.
// the most common use cases of reduce *when working with arrays of numbers) are sum & multiplication.
// The reduce() method takes a reducer which allows you to configure the logic of how the array wiil be reduced into a single number.

// Array redcue: sum

// Assuming the grades array below:
const grade = [10, 15, 5]

// Here's how we can calculate its sum with reduce:

const sum = grades.reduce((total, current) => {
  return total + current
}, 0)

// 1.  we call teh .reduce() method on the grades array.
// 2.  we assign the result of grades.reduce() to a new variable called sum
// 3. the reduce method is taking 2 parameters: The reducer and the initial value.

// Reducer

// The reducer in this example is:

;(total, current) => {
  return total + current
}

// This is the callback that is applied for every item in the array, this callback takes 2 parameters: total and current.

// The total is alwasy referring to the last computed value by the reduce function.  You may often see this called as accumulator.
// The current is referring to a single item in the array.

// code that we run
const grades1 = [10, 15, 5]

const sum1 = gradereduce((total, current) => {
  return total + current
}, 0)

//1. The first time the callback runs, total is assigned 0 and current will be assigned to the first item of the array. So total = 0 and current = 10.
//2. Then we return total + current whcih is 0 + 10 = 10.  Now the new value of total becomes 10.
//3. The callback runs the second time and this time current = 15 (second item of the array) and total = 10.  We return total + current which is 10 + 15 = 25.  The current value of total becomes 25.
//4. The callback rusn the third time and this time current = 5 (thrid item of the array) and total = 25.  We retrun total + current which is 25 + 5 = 30.
//5. There are no more items in the array, so the result of the reduce is the final value of toatl which is 30.
// Thus the sum is 30.

// Initial value

// The .reduce() method accepts 2 parameters: reducer and initialValue(not to be confused by the 2 parameters of the reducer which are total and current). The initialValue is the value we give to the total (or accumulator) the first time the callback runs.

// Pssing 0 as initialValue is the same as declaring let sum = 0 when using .forEach() to calculate the sum.

// It's the starting value that we use to be able to calculate the sum.

//JavaScript will automatically take your intialValue and pass it to the totoal argument in the reducer the first itme that callback runs.

let grades = [10, 5, 15, 20]

let sum2 = grades.reduce((total, current) => {
  console.log(`Total is ${total}`)
  console.log(`Current is ${current}`)
  console.log('------------------------------')
  return total + current
}, 0)

console.log(`Sum is ${sum}`)

//===========================================================================================================================

let grades3 = [10, 5, 15, 20]
const sum3 = grades.reduce((total, current) => {
  return total + current
}, 0)

const sumNumbers = (numbers) => {
  return numbers.reduce((total, current) => {
    return total + current
  }, 0)
}

//===========================================================================================================================

const multiplyNumbers = (numbers) => {
  return numbers.reduce((total, current) => {
    return total * current
  }, 0)
}

numbers.reduce((total, current) => {
  return total + current
}, 0)

//The reduce() method is used to calculate a single value from an array.
// In other terms, the reduce() method reduce an array into a single value
// The most common use cases fo reduce (when working with arrays of numbers) are sum & multiplication.
// The reduce() method takes a reducer which allows you to configure the logic of how the array will be reduced into a single number.
//The reduce() method takes 2 parameters: reducer and initialValue. .reduce(reducer, initialValue)
// The initialValue is always 0 for sum
// The reducer is a callback function that receives 2 parameters: total and current.
// The total (also called accumulator) keeps track of the result of the reduce method.  Fore example, when calculating the sum, it keeps track of the sum, step by step.
// The current represents one item of the array
// The reducer is called for every item in the array
// For multiplication, we use an initialValue of 1
