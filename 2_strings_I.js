//SubStrings

// A substring is a part or portion of a string.
//'rain' is a substring of the string 'brain' because you cant 'rain' by taking the last 4 characters.

// When working with strings, you often need to get a few characters of a string rather than all of it.
// Thus we use the substring method.

// Substring signature:

// A function signature gives you an explanation of the parameters that you need to pass for that method.

something.substring(indexStart, indexEnd)

// This means that when you call substring, you can give it 2 parameters, the first one for the indexStart and second one for indexEnd.

// indexStart: The poistion of the first character you'd like to include
// indexEnd: The position of the first characgter you'd like to ignore.

// This means an indexEnd of 5, will only include up to character 4.
// The combination of these 2 will give you a substring.

const language = 'JavaScript'
language.substring(1, 4) // 'ava'

// Optional parameters

// The indexEnd parameter is optiona, which means you can pass the indexStart and it'll assume the indexEnd to be the same as the string length.

language.substring(4) // 'Script'

//==========================================================================================================================

function capitalize(word) {
  return word[0].toUpperCase() + word.subString(1).toLowerCase()
}

function renderTableRow(label, value) {
  return `<tr>
    <td>${label}</td>
    <td>${value}</td>
    </tr>`
}
