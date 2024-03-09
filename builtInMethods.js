// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// the .includes method has an argument of "hello". when called the console will present itself as a boolen so its asking if the workd Hello is included in the stringed text "Hello World" which will be a true statement
"Hello World".includes("Hello");


//the endsWith method is passing an argument of "Hello". this method is asking if the string "Hello World" ends with "Hello" but this statement will come back as false.
"Hello World".endsWith("Hello");


// as stated above, this method is doing the same but its argument has change dto "rld" which matches with the last 3 texts of "Hello World", it will come back as a true statement.
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));
// the repeat method is called on the celebName variable. It stores the string object "Rick James". the method repeats the the variable 5 based on the value that was insterted. Consolelog would now show the name 5x
var celebName = "Rick James"
console.log (celebName.repeat(5));

// the trim method removes any whitesapce from both ends of the string. We declared a variable named country and assigned "                United States        " as its value. When the consolelog is called it will remove the spaces before and after the string and post "United States with no spaces on either side"
var country = "       United States"         ;
console.log (country.trim())


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// We declared a variable called electricCarCompanies and assigned an array with 3 vehicles. the method used in this excercise is the .pop method which removes the last element from an array and returns the element. 

let electricCarCompanies = ["Tesla", "Lucid", "Rivian"];

console.log (electricCarCompanies.pop());
// now reads as ["Tesla", "Lucid"]


// A variable snacks was declared and assigned an array with 3 elements. when the consolelog is called it will apply a method .reverse to the array. .reverse takes all 3 elements and reverses them so the end result should be shown below.
let snacks = ["chips", "candy", "banana"]
console.log (snacks.reverse());
//Now reads ["banana", "candy", "chips"];