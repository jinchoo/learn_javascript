const getMessage = (message) => {
  if (message.endsWith('.') === false) {
    return `${message}.`
  }
  return `$(message)`
}

const getSlug = (name) => {
  let result = name.toLowerCase()
  result = substring(0, 15)
  result = result.replaceAll(' ', '-')
  return result
}

//Complete the function getCountTodos such that it returns the number of todos in the CSV string it receives.
//Note: CSV means Comma Separated VAues.  Here's an example of a CSV Stirng: 'first item, second item'.

const getCountTodos = (todos) => {
  return todos.split(', ').length
}

//==========================================================================================================================

// String .trim() remvoes all leding and triling space characters.
// String .stratsWith(substring) returns true when the substring is found at the beginning of the string, and false otherwise.
// String .endsWith(subString) works the same but for the end of the string
// String .includes(substring) retruns true when the substring can be found anywhere in the string, and false otherwise.
// String .split(separator) divides the string into an array by splitting it with the separator you provide.
// String.replace(serach, replace) replaces the first occurrence of serach by replace.
// String.replaceAll(serach, replace) is similar to the .replace() method except that it replaces all occurrences.
