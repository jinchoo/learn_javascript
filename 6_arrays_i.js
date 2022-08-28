// Sum grades

// The function sumGrades such that it returns the sum of all the grades it receives as a parameter.

function sumGrades(grades) {
  let sum = 0
  grades.forEach(function (grade) {
    sum += grade
  })
  return sum
}

//==========================================================================================================================

// Sum postive numbers

// The function sumPositiveNumbers such that it returns the sum of all psitive numbers from the numbers parameter it receives.

function sumPositiveNumbers(numbers) {
  let sum = 0
  numbers.forEach(function (number) {
    if (number > 0) {
      sum += number
    }
  })
  return sum
}

//==========================================================================================================================

// Sum odd numbers

// The function sumOddNumbers such that it returns the sum of all the odd numbers from the nubmers parameter it receives.

function sumOddNumbers(numbers) {
  let sum = 0
  numbers.forEach(function (number) {
    if (number % 2 !== 0) {
      sum += number
    }
  })
  return sum
}

//==========================================================================================================================

function getDropdown(countries) {
  let selectCountry = `<option value=''>Please select</option>`
  countries.forEach(function (country) {
    selectCountry += `<option value='${country.toLowerCase()}'>${country}</option>`
  })

  return selectCountry
}

//==========================================================================================================================

function renderTableRows(rows) {
  let html = ''
  rows.forEach(function (row) {
    html += `<tr>
        <td>$${row[0]}</td>
        <td> ${row[1]}</td>
     </tr>`
  })
  return html
}
