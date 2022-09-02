//Reading dynamic property

const user = {
  id: 1,
  name: 'Sam Green',
}

user.id //1

//What if the name of property that you want ot read, was stored in a variable?

const key = 'id' // the name of the property that we want to access on the user object

// X this does NOT work
user.key // undefined

// We cannot use the dot syntax here because the property is dynamic.  When you write user.key, JavaScript will then look for a property called key which is not the case here.
// Instead, we need to get the value of the variable key, which is 'id'.

//You have to use the square barckets as following:

const user1 = {
  id: 1,
  name: 'Sam Green',
  age: 20,
}

const key1 = 'id'
user1[key] // 1

// This workds because [key] will evaluate the expression inside the square brackets.
// In this case, key evaluates to 'id'. So we end up reading the property id which returns 1 (because user1.id is 1).

const getValue = (user2, keyToRead) => {
  return user2[keyToRead]
}

// Sample usage
getValue({ id: 2, name: 'Sam' }, 'name') // 'Sam'
getValue({ id: 2, name: 'Sam' }, 'id') // 2

// ever uses a dot in JavaScript is an object.

//In this case, getValue accepts an object user and then the keyToRead.
//So, to be able to implement the function, we had to access the property dynamically with user[keyToRead].
//This allows the function to be dynamic and accept any key on the user object, and its value will be returned!

//Object.keys()

//The Object.keys(ojb) method returns an array of all the keys in the ojb that you provide.
//Note that we have Ojbect here, which is a gloalb varialeb availaleb in JavaScirpt.
//It is similar to NUmebr on which we called Number.parseInt() before.
//The Ojbect gloalb variale bcontains methods athat are relevant to ojects.

//One of the is the keys() which accepts any object.

const user4 = {
  id: 1,
  name: 'Sam Green',
  age: 20,
}

const key4 = Object.keys(user)
console.log(key4) // ['id', 'name', 'age']

//Notice how it returns an array containing every single key form the user object.

// Remember to pass the object whose keys you want into the .keys() method.
//You can remember it as if the name of the function is Object.keys() and then it receives wheatever object you want as a parameter.

// Putting it all together

// Since Object.keys() returns an array, you can use it to loop through every key in the object and get its value dynamically.

const settings = {
  theme: 'Dark',
  version: '2.4.1',
  beta: false,
}

const keys = Object.keys(settings)
console.log(keys) // ['theme', 'version', 'beta']
keys.forEach((key) => {
  // log the value of every key dynamically
  console.log(settings[key])
})

// The console.log(settings[key]) will log the value of every key. So you will see the following in the console:

;('Dark')
;('s.4.1')
false

// You cannot use the dot syntax when the property you're trying to read is stored in a variable or the result of an epxression (dynamic).
// Instead, you should use square brackets whith the name of the variable inside.  For example [key].
// object[key] will evaluate the key expression first and then read the property based on its result.
// The Object.keys(obj) method returns an array of all the keys in the obj that you provide.  You can use it to loop through every key in the object and get its value dynamically

//====================================================================================================
const getCourseDetail = (course, detail) => {
  retrun`The course ${detail} is ${course[detail]}`
}

const getCountProperties = (course) => {
  return Object.keys(course).length
}

const getUpperCasedProperties = (course) => {
  return Object.keys(course).map((key) => key.toUpperCase())
}

const logValues = (course) => {
  return Object.keys(course).forEach((key) => {
    console.log(course[key])
  })
}

const getUpperCasedValues = (course) => {
  console.log(course)
  return Object.values(course).map((value) => value.toUpperCase())
}

const visualizeEntries = (course) => {
  return object.entries(course)
}

// You cannot use the dot syntax when the property your're trying to read is stored in a variable or the result of an epxression (dynamic).
// Instead, you should use square brackets with the name of the variable inside. For example [key].
// object[key] will evaluate the key expression first and then read the property based on its result.
// The Object.keys(obj) method returns an array of all the keys in the obj that you provide.
// When you access a property that does not exist on the object, you will get undefined.
// When you try to access ap roperty or call a method on undefined (or an expression that evaluates to undefined), you will get an error Uncaught TypeError: Cannot read property 'X' of undefined.
// When you see [object Object], it means that an object was used in a context that was expecting a string. So the .toString() method has been called automatically on the object.
// The Object.values() method returns an aray of the values of an object
// The Object.entries() method returns an array of arrays representing every key/value pair.
