// Get element with ID "child" and store it in variable child
var child = document.getElementById("child");
// Set the inner HTML of child element to an h1 heading
child.innerHTML = "<h1>hello</h1>";

// Get elements with various IDs and store them in variables
var heading2 = document.getElementById("heading2");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

// Create new DOM elements
var p = document.createElement("p");        // Create a new paragraph element
var heading1 = document.createElement("h1"); // Create a new h1 element
var span1 = document.createElement("span");  // Create a new span element

// Set text content for the created elements
span1.innerText = "Mona";    // Set span text to "Mona"
p.innerText = "Ahmed";       // Set paragraph text to "Ahmed"
heading1.innerText = "hi";    // Set heading text to "hi"

// Append the paragraph to the child element (incorrect syntax, will throw error)
child.appendChild(p);
child.appendChild("ali")  // This will throw error - can't append raw text like this

// Correctly append the paragraph to child element
child.append(p);
// Add heading1 at the beginning of child's children
child.prepend(heading1);
// Add span1 at the beginning of child's children (before heading1)
child.prepend(span1);

// Remove the paragraph element from DOM
p.remove();

// Function to delete elements
function deletee() {
  heading2.remove();              // Remove heading2 element
  child.removeChild(heading1);   // Remove heading1 from child element
}

// Set click handler for btn2
btn2.onclick = function () {
  p.style.backgroundColor = "red";  // Change paragraph background to red
  p.innerText = localStorage.getItem("email"); // Set paragraph text from localStorage
};

// Add click event listener for btn3
btn3.addEventListener("click", function (e) {
  // Append a blue background span to paragraph
  p.innerHTML += "<span style='background-color:blue' >Mohamed</span>";
  p.style.backgroundColor = "red";  // Change paragraph background to red
  window.location.href = "https://mostaql.com/";  // Redirect to URL
  e.target.style.fontSize = "30px";  // Increase clicked button's font size
  e.target.style.backgroundColor = "blue";  // Change clicked button's background
});

// Add mouseover event to paragraph
p.addEventListener("mouseover", function (e) {
  heading1.style.backgroundColor = "green";  // Change heading1 background
  e.target.innerText = "Nada";  // Change paragraph text when hovered
});

// Add mouseleave event to paragraph
p.addEventListener("mouseleave", function () {
  p.style.backgroundColor = "#fff";  // Reset paragraph background when mouse leaves
});

// Browser Object Model (BOM) examples
console.log(location.href);      // Current page URL
console.log(location.pathname);  // Path part of URL
console.log(location.port);      // Port number
console.log(location.host);      // Hostname and port
console.log(navigator.userAgent); // User agent string
console.log(navigator.language);  // Browser language
console.log(navigator.onLine);    // Online status (true/false)
console.log(screen.width);       // Screen width
console.log(screen.height);      // Screen height

// Form handling
var form = document.getElementById("form");
var inputEmail = document.getElementById("exampleInputEmail1");
var inputPass = document.getElementById("exampleInputPassword1");

// Add submit event listener to form
form.addEventListener("submit", function (e) {
  e.preventDefault();  // Prevent default form submission
  console.log(e.target); // Log the form element
  
  // Log input values
  console.log(inputEmail.value);
  console.log(inputPass.value);
  
  // Store values in localStorage
  localStorage.setItem("email", inputEmail.value);
  localStorage.setItem("password", inputPass.value);
});

// Add click event to btn4
btn4.addEventListener("click", function () {
  localStorage.removeItem("password");  // Remove password from localStorage
  localStorage.clear();                 // Clear all localStorage
});

// This line would remove all click event listeners from btn4, but is incomplete
// Needs to specify which function to remove
btn4.removeEventListener("click");