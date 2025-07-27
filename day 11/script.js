// Define a function named sum1 that takes no parameters
function sum1() {
  // Declare a variable num1 and assign it the value 2
  var num1 = 2;
  // Declare a variable num2 and assign it the value 2
  var num2 = 2;
  // Return the sum of num1 and num2
  return num1 + num2;
}

// Define a function named sum2 that takes two parameters (num1 and num2)
function sum2(num1, num2) {
  // These lines are commented out - they would override the parameters
  //   var num1 = 5;
  //   var num2 = 5;
  
  // Log the sum of num1 and num2 to the console
  console.log(num1 + num2);
}

// Call sum1 and log its return value to the console
console.log(sum1());
// Call sum2 without passing arguments (will output NaN since parameters are undefined)
sum2();
// Call sum1 and store its return value in variable result
var result = sum1();
// Log the value of result to the console
console.log(result);

// Define a function sum3 with default parameters (x=2, y=2)
function sum3(x = 2, y = 2) {
  // Return the sum of x and y
  return x + y;
}
// Call sum3 with arguments 5 and 5, store result in z
var z = sum3(5, 5);
// Call sum3 with arguments 7 and 8 and log the result
console.log(sum3(7, 8));
// Call sum3 with first argument 8 (y will use default value 2) and log the result
console.log(sum3(8));

// Define an arrow function that takes x and y and returns their product
var result1 = (x, y) => x * y;
// Call the arrow function with arguments 2 and 3 and log the result
console.log(result1(2, 3));

// Define an arrow function sum5 that takes x and y and returns their sum
var sum5 = (x, y) => x + y;

// These lines are commented out:
// console.log(sum5(8,8));
// Prompt for user input and parse as integer:
// var x = parseInt(prompt("x"));
// var y = pa,rseInt(prompt("y"));

// Log the value of z (previously set to sum3(5,5))
console.log(z);

// Declare variable z and assign it value 5 (overwrites previous z value)
var z = 5;
// This line is commented out - would log x + 8 if x was defined
// console.log(x +  8);

// Define function avg that calculates an average (has issues - x and y not defined)
function avg() {
  var result = 0;
  // Attempt to calculate average (x and y not defined, uses z)
  result = +((x + y + z) / 3);
  // Show result in alert box
  alert(result);
}

// This is a comment showing string concatenation vs addition
// "5" + 5 = 10;

// Define function check that takes age parameter
function check(age) {
  // If age is 18 or more
  if (age >= 18) {
    // Show "adult" alert
    alert("adult");
  } else {
    // Otherwise show "Miro" alert
    alert("Miro");
  }
}

// Create array with 7 numbers
var array1 = [5, 9, 7, 8, 6, 4, 5];
// Log first element of array (index 0)
console.log(array1[0]);
// Log sixth element of array (index 5)
console.log(array1[5]);

// Change third element (index 2) to 10
array1[2] = 10;
// Log modified array
console.log(array1);

// Change seventh element (index 6) to 7
array1[6] = 7;
// Log modified array
console.log(array1);

// Add 20 to end of array
array1.push(20);
// Log modified array
console.log(array1);

// Add string "ali" to end of array
array1.push("ali");
// Log modified array
console.log(array1);
// Add 45 to beginning of array
array1.unshift(45);
// Log modified array
console.log(array1);
// Add string "jjjjj" to beginning of array
array1.unshift("jjjjj");
// Log modified array
console.log(array1);

// Remove last element from array
array1.pop();
// Log modified array
console.log(array1);

// Remove last element and store it in itemRemoved
var itemRemoved = array1.pop();
// Log the removed item
console.log(itemRemoved);
// Log modified array
console.log(array1);

// Remove first element twice
array1.shift();
array1.shift();
// Log modified array
console.log(array1);

// Remove first element and store it in itemRemoved2
var itemRemoved2 = array1.shift();
// Log the removed item
console.log(itemRemoved2);
// Log modified array
console.log(array1);

// Create new array x with elements from index 1 to 3 (4 not included) of array1
var x = array1.slice(1, 4);
// Log the sliced array
console.log(x);
// Log original array (unchanged by slice)
console.log(array1);
// This just references the length property but doesn't do anything with it
array1.length;

// Create new array array2
var array2 = [9, 5, 7, 6, 3, 2];
// Log length of array2
console.log(array2.length);

// Loop through array1 elements
for (let i = 0; i < array1.length; i++) {
  // Log each element with descriptive text
  console.log(" the number is " + array1[i]); //0 1 2
}

// Create new array array3
var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create new array by adding 2 to each element of array3
var new_array = array3.map((x) => x + 2);
// Log the new array
console.log(new_array);

// Create new array with elements of array3 that are <= 5
var new_array2 = array3.filter((x) => x <= 5);
// Log the new array
console.log(new_array2);

// Find first element in array3 greater than 5
var value = array3.find((x) => x > 5);
// Log the found value
console.log(value);

// Check if array3 includes the number 8
console.log(array3.includes(8));
// Find index of number 8 in array3
console.log(array3.indexOf(8));
// Change element at index 7 to 80
array3[7] = 80;
// Log modified array
console.log(array3);