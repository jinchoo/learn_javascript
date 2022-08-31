// Array to string

// Let's say you have an array of users, and you'd like to get the name of each user separated by a comma.
// Like a CSV (Comma Separated Values) export

// You already know the 2 methods that you need for such operations:

// First, you start with .map() call to extract the name from the users array, and then you use.join() to join the array elements into one string.

const users = [
  {
    id: 1,
    name: 'Same Doe',
  },
  {
    id: 2,
    name: 'Alex Blue',
  },
]

const userNamesArray = users.map((user) => user.name)
console.log(userNamesArray) // [ 'Same Doe', 'Alex Blue' ]

const csv = userNamesArray.join(', ')
console.log(csv) // 'Same Doe, Alex Blue'

// You can also cahin these 2 commands and write it on one line:

const csv1 = users.map((user) => user.name).join(', ')
console.log(csv) // 'Sam Doe, Alex Blue'

//Applying it to HTML

// The above trick is ften used to generate an HTML string form an array. Let's say we'd like to return an unordered list (a ul with lie items) from the users array above.
// Instead of writing it with .forEach(), you can use the above triick as follows:

const html = `<ul>
   ${users.map((user) => `<li>${user.name}</li`).join('')}
   </ul>`
console.log(html) // <ul> <li>Sam Doe</li><li>Alex Blue</li> </ul>

//Notice how for every user, we return an <li>...</li> with the user's name inside.
//What's every important here is the .join('').  If you forget this, you will get the following HTML:

;<ul>
  <li>Sam Doe</li>, <li>Alex Blue</li>
</ul>

// That's because the array returned form .map() will automatcially be converted to a string by the borwser.
// It will automatically called .toSTring() method wich will insert a comma after every array item.

// Insted, you want to covert the array into a string to yourself.  You can do that by calling .join('') with an empty string as glue.
// Finally, you have to wrap the whole string with the opning <ul> and the closing </ul>.

const getDropdown = (countries) => {
  return `<option value=''>Please select</option>
    ${countries
      .map(
        (country) =>
          `<option value="${country.toLowerCase()}">${country}</option>`,
      )
      .join('')}`
}

//==========================================================================================================================

// Deleting Items

// Say you've got an array and you'd like to empty it, you can do that by setting its length to 0:

const items = ['Pen', 'Paper']
items.length = 0

console.log(items) // [];

// This works even though we're using const because we're not re-assigning items but rather changing its length to 0 which ends up removing all the items inside of it.
// The const here guarantees that we will always have an array (but its content can change).

//Array.splice()

// you can also delete specific items from an array using the splice(start[,deleteCount]) method.

// Do not confuse splice with abnother method called slice.

// The .splice(start[, deleteCount]) method removes items form the array starting from the start index that you specify.
// If no deleteCount is provided, it will remove all the remining items as of the start index.

// When you specify a deleteCount, then it will remove as many items as you provided in the deleteCount from the start index.

// The delete the 1st element of an array, you call .splice(0, 1).
// The delete 3 elements starting from the 2nd position, you call. splice(1, 3).
// If you call .splice(1), then it will remove all the items starting from the 2nd position (index 1).

// Try to always specify the 2nd argument for splice to avoid unexpectedly remvoing more items than necessary.

const items1 = ['Pen', 'Paper', 'Eraser']
const deletedItem = items1.splice(0, 1) // removes one element at index 0
console.log(deletedItem) // ['Pen']

console.log(items) // ['Paper', 'Eraser']

// Notice how the .splice() method returns an array of the elments(s) removed.
// If you omit deleteCout, it will remove all the items as of the start index.

//==========================================================================================================================

const removeFirstApp = (apps) => {
  apps.splice(0, 1)
  return apps
}

// The Array.every(callback) method returns true when every item in the array satsfies the cdition provided in the callback.
// The Array.some(callback) method returns true when at least one item in the array satisfies the condition provided in the callback.
// You can empty an array by setting its length to 0.
// .splice(start[. deleteCout]) removes items form the array from the start index.  The number of items it will remve is specified by deleteCount.
// If you omit deleteCount, it will remove all the items as of the start index.
