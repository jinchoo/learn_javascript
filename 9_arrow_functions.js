// Our logUserIds function fails when we call it wiout any parameters.

function logUserIds(userIds = []) {
    userIds.forEach(function (userId) {
        console.log(userId);
    })
};

// Introduction to arrow functions

const sum = (a, b) => {
    return a + b; 
}

// from function to arrow function

// There are multiple wasy of writing a function in JavaScript.
// You could either define a function and give it a name, or you could define a varaible and assign it to an anonymous function. 

function sum(a, b) {
    return a + b;
}

//can be written as:

const sum1 = function (a, b) {
    return a + b;
}

// Notice how we dfine a variable sum and then we assign it to a function that takes 2 parameters a and b.

// How to conver the function into an arrow function
// you can do that in 2 steps:
// 1. remove the function keyword
// 2. add an arrow (= and >) between the parameters (a, b) and the opeinging curly brace {

const sum2 = (a, b) => {
    return a + b;
}

// Arrow function always start with the parameters, followed by the arrow => and then the function body.  


// A function triple that returns the result of its parameter multiplied by 3. 
// Rewrite it as an arrow function

function triple(value) {
    return value * 3
}

const triple = value => {
    return value * 3
}

//==========================================================================================================================

// Array forEach

// .forEach() example

const grades = [10, 8, 13];

grades.forEach(function (grade) {
    console.log(grade);
});

// The iteration can be rewritten using arrow functiuons as following:

grades.forEach((grade)) => {
    console.log(grade);
}

// Also, because the arow function has one parameter, you are allowed to drop the parentheses() surrounding the parameter:

grades.forEach(grade => {
    console.log(grade);
})

// This is only the case when you have one parameter.  Multiple parameters have to be wrapped in parentheses().  

// Array filter()
// The same thing applies to .filter().

let numbers = [9, 5, 14, 3, 11];
let numbersAboveTen = numbers.filter(function (number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]

// The filter(callback) can be rewritten as:

let numbersAboveTen1 = numbers.filter(number => {
    return number > 10;
})

// When an arrow function has one parameter, you are allowed to drop the parentheses around that parameter.  
//==========================================================================================================================

// Using arrow functions, complete the function sumGrades such that it returns the sum of all the grades it receives as a parameter.  

const sumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => {
        sum = sum + grade
    });
    return sum;
}

// Using an arrow funciton, complete ther function getDropdown such that it returns the following HTML that will fill the existing <select></select> element.  The HTML that's returned should look like the following:

// 1. It should start with: <option value=''>Please select</option>
// 2. Then, for every country you should have the <option> for that.  For example, for the country 'Netherlands', you should have: <option value='netherlands'>Netherlands</option>

const getDropdown = (countries) => {
    let html = `<option value=''>Please select</option>`;
    countries.forEach(country => {
        html += `<option value="${ country.toLowerCase() }"> ${ country }</option>`
    })
    return html;
}

//==========================================================================================================================

// A parameter is a varaible in a funciton defintion. When a function is called, the arguments are the data you pass into the method's parameters.
// When you call a function without providing a value for an expected argument, the latter will default to undefined.
// Define parameters allow you to give a default value for one or more parameters that have not been provided when the function is called.
// Arrow funcitons are shorter to write
// Arrow functions always start with the parameters, followed by the arry => and then the function body.
// When an arrow function has one parameter, you are allowed to drop the parentheses around that parameter. 





