// The function getYear such that it returns the searchYear(passed as 2nd parameter) when its found in the array.  Otherwise, it should return undefined.

function getYear(years, searchYear) {
  return years.find(function (year) {
    return year === searchYear
  })
}

//==========================================================================================================================

// The function getOddYears such that it returns all the years that are odd from the years parameter itr receives.

function getOddYears(years) {
  return years.filter(function (year) {
    return year % 2 !== 0
  })
}

//==========================================================================================================================

// Array map

// The .map(callback) method allows you to transform an array into another one.  Here are some common examples:

// [4, 2, 5, 8] transformed to [8, 4, 10, 16].  We doubled every item in the original array.
// ['sam', 'Alex'] transformed to ['SAM', 'ALEX'].  We upper cased every time in the original array.

// Notice that you always get back an array containing the sam number of items compared to the original array, but every item has most likely undergone some transformation.

// In the first example, the transformation is that we multiply every number by 2.

// In the second example, the transformation is that we call .toUpperCase() on every item.

// Example:

const numbers = [4, 2, 5, 8]

const doubled = numbers.map(function (number) {
  return number * 2
})

console.log(doubled) // [8, 4, 10, 16]

// and

const names = ['sam', 'alex']
const upperNames = names.map(function (name) {
  return name.toUpperCase()
})

// if you get the retrun inside the callback function, you will end up with the following array: [undefined, undefined].
// That's because, for every item in the original array (['sam', 'Alex]), you're returning undefined so the end result will be [undefined, undefined].

//==========================================================================================================================

// Array includes(item)
// The array. includes(item) method is one of the simplest array methods as it takes an item rather than a callback and returns true when that item exists in the array and false otherwise.

const groceries = ['Apple', 'Peach', 'Tomato']

groceries.includes('Tomato') // true
groceries.includes('Bread') // false

//==========================================================================================================================

//The function isAppUsed such that it returns true when the app aparameter it receives exists in the apps paramter, and false otherwise.

function isAppUsed(apps, app) {
  return apps.includes(app)
}

//==========================================================================================================================

// The function getStringSizes such that it returns an array of the number of characters for every string it reciives in the strings parameter

// means, for the array ['abc', 'd'] it should return [3, 1] that's because the first string is made up of 3 characters and the second string is made up of 1 character.

function getStringSizes(strings) {
  return strings.map(function (string) {
    return string.length
  })
}

//==========================================================================================================================

//Classroom Project I

// 1. getnNumbers should return the number of grades
function getNumbers(grades) {
  return grades.length
}

// 2. getSumGrades should return the sum of all the grades
function getSumGrades(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    sum = sum + grade
  })
  return sum
}

// 3. getAverageValue should retrun the average value of all grades (sum of all grades divided by the total number of grades).
function getAverageValue(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    sum = sum + grade
  })
  return sum / grades.length
}

// 4. getPassingGrades should return all passing grades (10 and above)
function getPassingGrades(grades) {
  return grades.filter(function (grade) {
    return grade >= 10
  })
}
// 5. getFailingGrades should returnb all failing grades (9 and below).
function getFailingGrades(grades) {
  return grades.filter(function (grade) {
    return grade <= 9
  })
}
// 6. getRaisedGrades shoudl return all the grades raised by 1 (grades should not exceed 20).
function getRaisedGrades(grades) {
  grades.map(function (grade) {
    if (grade + 1 > 20) {
      return 20
    }
    return grade + 1
  })
}

// Implement the getVotersCountfunction that it returns the number of citizens that are allowed to vote (must be 18 years or older).

//with chaining
function getVotersCount(ages) {
  return ages.filter(function (age) {
    return age >= 18
  }).length
}

//without chaining

function getVotersCount(ages) {
  const filterdVoters = ages.filter(function (age) {
    return age >= 18
  })
  return filterdVoters.length
}
