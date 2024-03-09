// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: changed the function name to something less wordy, removed the console.log to just have it return the statement to the function when its called.
function greeting() { 
  return ("Hello, what is your name?") }

greeting()


// EX 2:changed function name, added a return statement to be called in the console.
function sumNums(first, second, third){
  return first + second + third
}

sumNums(1, 2, 3);
sumNums(4, 2, 7);


// EX 3: completed the function name as it was mispelled, moved the last curly bracket to align with the function code to look more pleasing. proper structure i suppose.
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");  
}

makeFreshPesto();


//  EX 4: moved the last curly brace down. and added a semicolen closure to line 41.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg;
}