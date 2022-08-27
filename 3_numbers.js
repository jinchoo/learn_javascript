function genNextAge(age) {
  return Number.parseInt(age, 10) + 1
}

function getBoxWidth(value) {
  return Number.parseInt(value)
}

function covertNumberToString(number) {
  return number.toString()
}

// Advanced if

// It is possible sometimes to drop the else. Let's tak a look at an example:

function canVote(age) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

// since this function is performing two different actions based on the result of the if condition and its opposite(else), then we can rewrite it by dropping the else keyword.
function canVote(age) {
  if (age >= 18) {
    return true
  }
  return false
}

//These two funcitons will have the exact same result.  That's because the return keyword will quit the function with the result.
//So, when the age is bigger than or equals 18, the function will return true and the rest of the code will not execute.
// However, when the age is less than 18, then the code inside the if condition does not execute.
// Thus, the only line that executes is the last one, which is return false.

// This is called early return

//==========================================================================================================================

// The function getNextAge such that it returns the age next year (by adding 1 to the current age).
// Note that the age is provided by the user in a text box (which you can try in the browser tab).
// However, when the text box is empty, the function return NaN.
// We need to fix that and make it show 0 instead of NaN.

function getNextAge(age) {
  if (age === '') {
    return 0
  } else {
    return Number.parseInt(age, 10) + 1
  }
}

function getDescription(text) {
  if (text.length > 10) {
    return text.substring(0, 10) + '...'
  }
  return text
}
