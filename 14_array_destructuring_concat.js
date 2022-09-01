//Array destructuring

//Array destructing is a relatively new featrue of the JavaScript language and is considered syntatcit suagr, meaning that it makes your code look easier to read.

const dimensions = [20, 5]

// create variables
const width = dimensions[0]
const height = dimensions[1]

// log them
console.log(width) // 20
console.log(height) // 5

// The above codde can be rewritten using the new array destructuring syntax as follows:

const dimensions1 = [20, 5]

// create variables
const [width1, height1] = dimensions

// log them

console.log(width) //20
console.log(height) //5

//We are pulling the first entry of diensions into a new variable width, and we're pulling the second entry of dimensions into a new variable height.

// So the order in the [] matters for array destructruing as the first variable name will correspond to the first itme in the array (index 0), the second variable name will correspond to the second item in the array (index1), and so on.

//You can identify destructruing when you see the square brackets [] on the left side of the equal sign.

//Examples in React hooks

function App() {
  const [counter, setCounter] = useState(0)
  return null
}

// The const [counter, setCounter] = useState(0) is array destructuring.

// The function useState(0) returns an array of 2 items and we destrucrue them into 2 varaibles counter and setCounter.

// Array destructring is syntactic sugar (meaning that it makes your code look easier to read).
// The order in array destructuring matters, as very variable will be matched to the corresponding array item.
// You can identify destructuring when you see the square brackets [] on the left side of the equal sign.
