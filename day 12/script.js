// Create an object with multiple properties
var obj = {
  name: "nada",       // String property
  age: 33,            // Number property
  isGraduated: true,  // Boolean property
  hoppy: ["reading", "coking"],  // Array property (note: 'hoppy' is likely a typo for 'hobby')
  parent: {           // Nested object
    father: "ali", 
    mother: "Mona" 
  },
};

// Create an empty object using the Object constructor
var obj2 = new Object();

// Access object properties using dot notation
console.log(obj.name);        // Output: "nada"
console.log(obj.isGraduated); // Output: true

// Access object properties using bracket notation
console.log(obj["name"]);     // Output: "nada"
console.log(obj["age"]);      // Output: 33

// Modify object properties
obj.name = "nour";           // Change name to "nour"
obj["age"] = 22;             // Change age to 22 using bracket notation

console.log(obj);  // Output the modified object

// Add a new property to the object
obj.last_name = "ali";
console.log(obj);  // Now includes last_name: "ali"

// Output the current state of the object
console.log(obj);

// Add properties to obj2
obj2.name = "mahmed";
obj2.age = 45;
console.log(obj2);  // Output: {name: "mahmed", age: 45}

// Remove a property from obj
delete obj.isGraduated;
console.log(obj);  // isGraduated property is now gone

// Access array elements within the object
console.log(obj.hoppy[0]);  // Output: "reading" (first element in hoppy array)
console.log(obj.hoppy);     // Output: ["reading", "coking"] (whole array)

// Initialize empty array in obj2
obj2.hoppy = [];

// Access nested object property
console.log(obj.parent.mother);  // Output: "Mona"

// Add number property (two equivalent ways)
obj.number = 123456874;      // First assignment
obj["number"] = 4563217;     // Second assignment overwrites first
console.log(obj);            // Output includes number: 4563217

// Loop through all properties in obj
for (y in obj) {
  console.log(y + " is " + obj[y]);  // Outputs each property and value
}

// Loop through all properties in obj2
for (y in obj2) {
  console.log(y + " is " + obj2[y]); // Outputs each property and value
}

// Create new object and get properties from user input
var obj3 = new Object();
obj3.name = prompt("enter your name");
obj3.age = prompt("enter your age");
obj3.number = prompt("enter your number");

// Display collected user data
for (z in obj3) {
  console.log(z + " is " + obj3[z]);
}

// String manipulation examples
var name1 = "Nada Ahmed Mohamed"; 

// String properties and methods
console.log(name1.length);          // Output: 17 (length of string)
console.log(name1.toLowerCase());   // Output: "nada ahmed mohamed"
console.log(name1.toUpperCase());   // Output: "NADA AHMED MOHAMED"

var newName = name1.trim();         // Removes whitespace from both ends
console.log(newName);               // Output: "Nada Ahmed Mohamed"

// Check if string contains substring
console.log(name1.toLowerCase().includes("na"));  // Output: true

// String replacement
var name2 = name1.replace("a", "5");  // Replaces first 'a' with '5'
console.log(name2);                   // Output: "N5da Ahmed Mohamed"

var name3 = name1.toUpperCase().replaceAll("A", "5"); // Replaces all 'A's with '5'
console.log(name3);                   // Output: "N5D5 5HMED MOH5MED"

// String character access
console.log(name1[0]);                // Output: "N" (first character)

// String slicing
var name4 = name1.slice(0, -3);       // Gets string without last 3 chars
console.log(name4);                   // Output: "Nada Ahmed Moh"

// String searching
console.log(name1.indexOf("A"));      // Output: 5 (index of first 'A')

// Remove all spaces
var name5 = name1.replaceAll(" ", "");
console.log(name5);                   // Output: "NadaAhmedMohamed"

// Substring methods
var name6 = name1.substring(5, 10);   // Gets chars from index 5 to 9
console.log(name6);                   // Output: "Ahmed"

var name7 = name1.substr(3, 6);       // Gets 6 chars starting at index 3
console.log(name7);                    // Output: "a Ahm"

// Find last space position
console.log(name1.lastIndexOf(" "));   // Output: 10

// Check string ending
console.log(name1.endsWith("Mohamed")); // Output: true

// String concatenation
console.log(name1 + " jjjjj");          // Output: "name + jjjjj"
var name8 = name1.concat(name2, name3); // Combine multiple strings
console.log(name8);

// Template literal example
var city = "Sohag";
var city = prompt();                   // Get city from user
var first_name = ` my city is ${city} `; // String interpolation
console.log(first_name);

// Split string into array
console.log(name1.split(" "));         // Output: ["Nada", "Ahmed", "Mohamed"]