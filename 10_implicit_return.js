// When you forget to write retrun in a function in JavaScript, you get an implicit return undefined.  The word implicit here means that it is inferred by not specifically expressed.
// Meaning that there was no return undefined by we end getting undefined as a result. For example:

const sum = (a, b) => {
  a + b
}

sum(1, 3) // undefined

// As you can see, sum(1, 3) returns undefined becasue we did not have a return keyword. inside the function body.

// However, with arrow functions, you can implicitly return the result of the funciton on some very specific conditions.

// This works (implicit return)

const sum1 = (a, b) => a + b

sum(1, 3) // 4

// For the implicity return to work, you must have all the following conditions:

// 1. Your function must be an arrow function.
// 2. The function body must be only one line.  This means you must remove the curly braces.
// 3. You must remove the return keyword becasue the function body is one line.

// When all these condtions are met, the arrow function will implicitly return the result of its funciton body (which is only one line).
const isLegal = (age) => {
  return age >= 18
}

// Now let's make use of implcit return by:

// 1. remvoing the curly braces
// 2. remvoing teh return keyword

const isLeagal1 = (age) => age >= 18

// only use implcit return when the function body is one line and short.

//==========================================================================================================================

// The .filter(callback) can be re-written as an arrow function as follows:

const numbers = [9, 5, 14, 3, 11]

const numbersAboveTen = numbers.filter((number) => number > 10)

// A common mistake here is writing numbers.filter(number > 10) but this does not work because you need to pass the parameter first number and then the arrow function => and then finally specify the function body which is number > 10.

// Array find(callback)

// The .find(callback) can be re-written as an arrow function as follows:

const names = ['Alice', 'Bob', 'Charlie']

const result = names.find((name) => name === 'Charlie')

// Array map(callback)

// The .map(callback) can be re-written as an arrow function as follows:

const numbers1 = [4, 2, 5, 8]

const doubled = numbers1.map((number) => number * 2)

//==========================================================================================================================

// The function body is more than one line so you cannot use an arrow function.

const getRaisedGrades = (grades) => {
  return grades
    .map((grade) => {
      if (grade + 1 > 20) {
        return 20
      }
      return grade + 1
    })
    .join(',')
}

//==========================================================================================================================

const getPostitiveTemperatures = (temperatures) => {
  return temperatures.filter((temperature) => temperature > 0)
}

//==========================================================================================================================

const getYear = (years, searchYear) => {
  return years.find((year) => year === searchYear)
}

const getSTringSizes = (strings) => {
  return strings.map((string) => string.length)
}

//==========================================================================================================================

// 1. getNumberOfGrades should retrun the number of grades
const getNumberOfGrades = (grades) => {
  return grades.length
}
// 2. getSumGrades should return the sum of all the grades
const getSumGrades = (grades) => {
  let sum = 0
  grades.forEach((grade) => {
    sum = sum + grade
  })
  return sum
}
// 3. GetAverageValue should return the average value of all grades (sum of all grades divided by the total number of grades)
const getAverageValue = (grades) => {
  let sum = 0
  grades.forEach((grade) => {
    sum = sum + grade
  })
  return sum / grades.length
}
// 4. getPassingGrades shold return all passing grades (10 and above)
const getPassingGrade = (grades) => {
  return grades.filter((grade) => {
    return grade >= 10
  })
}
// 5. getFailingGrades should return all failing grades (9 and below).
const getFailingGrades = (grades) => {
  return grades.filter((grade) => {
    return grade < 9
  })
}
// 6. getRaisedGrades should return all the grades raised by 1 (grades should not exceed 20)
const getRiasedGrades = (grades) => {
  return grades.map((grade) => {
    if (grade + 1 > 20) {
      return 20
    }
    return grade + 1
  })
}
