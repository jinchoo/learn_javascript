//Assuming a variable name, here's an example of object shorthand: cosnt user = {name}.
//const user = [age} is equivalent to const user = {age: age}.
// When you have several console.log calls, wrap the values with {} so that you use object shorthand. The benefit is that you will be able to see the name of the variable that you were trying to log, alongside its value.

const sum = (a, b) => {
  console.log({ a }) // {a: 1}
  console.log({ b }) // {b: 3}
  let total = a + b
  console.log({ total }) // {total: 4}
  return total
}

const getUser = (id, name) => {
  return {
    id,
    name,
  }
}

// {id: 1, name: 'John'}
// {id: 2, name: 'Jane'}

const getProduct = (a, b) => {
  console.log({ a, b })
  let product = a * b
  console.log({ product })
  return product
}

getProduct(2, 3) // {a: 2, b: 3} {product: 6}

// Destructruing & Concatenation

//Just like array destructuring, you can destructure key/value pairs (nested objects) from an object.
//This concept is similar, except that you have to {} instead of [] on the left side of the = operator and you should have an object on the right side of the = operator.

const config = {
  id: 1,
  isAdmin: false,
  theme: {
    dark: false,
    accessiblity: true,
  },
}

//How you access some of its properties and create varaibles out of them:

const id = config.id
const isAdmin = config.isAdmin
const theme = config.theme

// This can be refactored with object destructuring as follows:

const { id, isAdmin, theme } = config

// This new id varaiable is created from config.id.  So, the variable names should match the key names.

// You can also decide to only destructure the varaibles you need:

const { isAdmin, theme } = config

// OBject destructuring is considered syntactic sugar meaning it makes reading the code easier (once you get used to it).

// Destructuring with default value

// It's also possible to destructure with a default value, meaning that you can assign a default value to a property if it does not exist in the object you're destructruing from:

const user = {
  id: 1,
  name: 'Sam',
}

const { name, isAdmin = false } = user
console.log(isAdmin) // false

// As you can see, isAdmin defaulted to false because it does not exist on user.

const user = {
  id: 1,
  name: 'Sam',
  isAdmin: true,
}

const { name, isAdmin = false } = user
console.log(isAdmin) // true

// Example above, it did not default to false becasue it exists on user so it just gets destructured.

// Destrucure and rename
// It's also possible to destructure and remanme from an object.
//Let's say you already have a ame variable so you'd like to destructure user.name and assign it to a variable called userName.

const name = 'Document title' // name varaible is already decleared

const user = {
  id: 1,
  name: 'Sam',
  isAdmin: true,
}

// destructure user.name into varaible userName
const { name: userName, isAdmin } = user
console.log(userName) // 'Sam'

//Here's another example where we destructure user.isAdmin into a new variable admin(note that we destructure it and rename it):

const user = {
  id: 1,
  name: 'Sam',
  isAdmin: true,
}

// destructure user.name into varaible userName
const { name: userName, isAdmin } = user
console.log(userName) // 'Sam'

// Here's another example where we destructure user.isAdmin into a new variable admin (note that we destructure it and rename it):

const user = {
  id: 1,
  name: 'Sam',
  isAdmin: true,
}

const { id, name, isAdmin: admin } = user
// We've renamed isAdmin to admin while destructuring
console.log(admin) // true

// Concatenate objects

// In some scenarios, you'd like to merge 2 objects together.  You can do that using the ...sperad operator.

const firstPerson = {
  name: 'Sam',
  age: 18,
}

const secondPerson = {
  age: 25,
  type: 'admin',
}

const mergeObjects = { ...firstPerson, ...secondPerson }
console.log(mergedObjects) // {name: 'Sam', age: 25, type: 'admin'}

const mergeOptions = (options, defaultOptions) => {
  console.log(options)
  console.log(defaultOptions)
  return { ...defaultOptions, ...options }
}

const getLatLng = (userLocation) => {
  //destructure into 2 variables: lat & lng
  const { lat, lng } = userLocation
  return `The latitude is ${lat} and the longitude is ${lng}`
}

const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
}

console.log(getLatLng(userLocation))

//The latitude is 24.235235 and the longitude is 2.5734.

const getLatLngElevation = (userLocation) => {
  //destrcutre into 3 variables: lat, lng & elevation (defaulting to 0)
  const { lat, lng, elevation = 0 } = userLocation

  retturn`The latitude is ${lat}, the longitude is ${lng} and the elevation is ${elevation} meters`
}

const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
}

console.log(getLatLngElevation(userLocation))

//The latitude is 24.235235, the longitude is 2.5734 and the elevation is 0 meters.

// Chapter Recap

// Assuming a variable name, here's an example of object shorthand: const user = {name}.
// const user = {age} is equivalent to const user = {age: age}.
// When you have several console.log calls, wrap the values with {} so that you use object shorthand.  The benefit is that you will be able to see the name of the varaible that you were trying to log, alongside its value.
// Just like array dstructruing, you can destructure key/value pairs (or nested objects) from an object
// It's also possible to destructure with a default value, meaning that you can assign a default value to a property if it does not exist in the object you're destructuring from.
// You can merge objects together with the ... spread operator.  The order of objects matters(for duplicate keys).
