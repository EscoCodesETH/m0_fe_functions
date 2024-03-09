// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(greet){
    return "Hello user, how are you?"
}
console.log (greeting);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name){
    return `hello ${name}, How are you today?`
}
console.log (customGreeting("james"));
console.log (customGreeting("Jessi"));


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(fName,mName,lName){
    return `Is your name "${fName} ${mName} ${lName} ?`
}
console.log (greetPerson("John","Quincy","Adams"));

// 4: Write a function named square that takes in one number, and returns the square of that number.

function square (num){
    let sqRoot = Math.sqrt(num);
    return `The square root of ${num} is ${sqRoot}`
}
console.log(square(144));


// BONUS: Print a sentence that interpolates the return value of your square function.


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.


function checkStock(quantity, item){
    if (quantity >= 4){
        console.log (`${item} is stocked`)
    }else if (quantity >= 1){
        console.log (` ${item} running LOW`)
    }else if (quantity === 0){
        console.log (`${item} OUT of stock!`)
    }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"