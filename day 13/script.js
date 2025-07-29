// Get an element with ID "p1" and store it in variable p
var p = document.getElementById("p1");
// Log the p element to the console
console.log(p);

// Get all elements with class "heading" and store them in headtitle
var headtitle = document.getElementsByClassName("heading");
// Log the first element with class "heading" to the console
console.log(headtitle[0]);
// Get all <h1> elements and store them in heading1
var heading1 = document.getElementsByTagName("h1");
// Log all <h1> elements to the console
console.log(heading1);

// Get the first element matching CSS selector "#p1" and store it in p1
var p1 = document.querySelector("#p1");
// Log the p1 element to the console
console.log(p1);
// Get all elements matching CSS selector ".heading" and store them in p2
var p2 = document.querySelectorAll(".heading");
// Log all elements with class "heading" to the console
console.log(p2);

// Set the font size of p1 to 40 pixels
p1.style.fontSize = "40px";
// Get an element with ID "p2" and store it in p2
var p2 = document.getElementById("p2");
// Log the parent element of p2 to the console
console.log(p2.parentElement);
// Log the parent element of p to the console
console.log(p.parentElement);

// Get an element with ID "container" and store it in container
var container = document.getElementById("container");
// Log all child nodes of container (including text nodes) to the console
console.log(container.childNodes);
// Log the second child element of container to the console
console.log(container.children[1]);
// Log the first child element of container to the console
console.log(container.firstElementChild);
// Log the last child element of container to the console
console.log(container.lastElementChild);

// Get all image elements in the document and store them in imgs
var imgs = document.images;
// Log all image elements to the console
console.log(imgs);

// Get all link elements (anchor tags with href) in the document and store them in links
var links = document.links;
// Log the first link element to the console
console.log(links[0]);

// Get all form elements in the document and store them in form
var form = document.forms;

// Get the HTML content inside element p (not used - just referencing property)
p.innerHTML;
// Get the text content inside element p, ignoring HTML tags (not used - just referencing property)
p.innerText;
// Get all text content inside element p, including hidden text (not used - just referencing property)
p.textContent;

// Replace the HTML content inside container with an <h1> element
container.innerHTML = "<h1>hello</h1>";

// Set the text content of p, treating the string as text (won't render HTML tags)
p.innerText = "<h1>hello</h1>";

// Log the HTML content inside container to the console
console.log(container.innerHTML);
// Log the text content inside container to the console
console.log(container.innerText);
// Log all text content inside container to the console
console.log(container.textContent);

// Append an <h1> and <p> element to the container's HTML content
container.innerHTML += "<h1>hello</h1>  <p>Ali</p>";
// Append another <p> element to the container's HTML content
container.innerHTML += "<p>Ali</p>";

// Prompt the user to enter their name and store it in variable name
var name = prompt("enter your name ");
// Append the name to the text content of p
p.innerText += `  ${name}`;

// Log the source URL of the first image to the console
console.log(imgs[0].src);

// Change the source and alt text of the first image
imgs[0].src = "img.jpg";
imgs[0].alt = "nooooooooo";

// Log the alt text of the first image to the console
console.log(imgs[0].alt);
// Set the width and height of the first image to 200 pixels
imgs[0].width = "200";
imgs[0].height = "200";

// Change the href, text content, and target attribute of the first link
links[0].href = "https://www.linkedin.com/feed/";
links[0].textContent = "linkedIN";
links[0].target = "_blank";

// Change the background color and padding of element p
p.style.backgroundColor = "red";
p.style.padding = "20px";

// This line is commented out - it would replace all classes of container with "card"
// container.className = "card";

// Add the class "card" to container's class list
container.classList.add("card");

// Add then remove the class "card" from the first heading element
headtitle[0].classList.add("card");
headtitle[0].classList.remove("card");

// Check if the first heading element has class "card" and log the result
console.log(headtitle[0].classList.contains("card"));

// Define a function named style1
function style1() {
  // Add a CSS transition to the first heading element
  headtitle[0].style.transition = "1s all  ";
  // Toggle the "card" class on the first heading element
  headtitle[0].classList.toggle("card");
  // Set the font size of p to 20 pixels
  p.style.fontSize = "20px";
  // Check if the first heading element has class "card" and log the result
  console.log(headtitle[0].classList.contains("card"));
}

// Set the class attribute of p to "pp"
p.setAttribute("class", "pp");

// Set the width attribute of the first and third images to 300
imgs[0].setAttribute("width", "300");
imgs[2].setAttribute("width", "300");

// This line is commented out - it would remove the width attribute from the third image
// imgs[2].removeAttribute("width")

// Log the src and width attributes of the first image
console.log(imgs[0].getAttribute("src"));
console.log(imgs[0].getAttribute("width"));

// Check if the third image's src is "bg.jpg" and apply styles accordingly
if (imgs[2].getAttribute("src") == "bg.jpg") {
  imgs[2].style.borderRadius = "50%";
} else {
  imgs[2].style.borderRadius = "20px";
}

// Define a function named changeText
function changeText() {
  // Prompt the user for input
  var name = prompt();
  // Get an element with ID "head1"
  var headText = document.getElementById("head1");
  // Append the user's input to the text content of headText
  headText.innerText += ` ${name}`;
}

// Define a function named changeContent
function changeContent() {
  // Append new HTML elements to container
  container.innerHTML += "<p>Noha</p> <span>NADA</span>";
}

// Define a function named changeBG
function changeBG() {
  // Add a CSS transition to container
  container.style.transition = "2s all";
  // Change the background color of container to blue
  container.style.backgroundColor = "blue";
}

// Define a function named addImg
function addImg() {
  // Append an image element to container's HTML
  container.innerHTML += "<img src='img.jpg'alt='no image' />";
  // This line would get the newly added image, but has a typo in the selector
  var img = document.querySelector("#conatiner img");
  // This line would set an attribute on the image, but is incomplete
  img.setAttribute("", "");
}
