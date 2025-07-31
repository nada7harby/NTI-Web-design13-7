var form_add = document.getElementById("form-add");
var nameProduct = document.getElementById("nameProduct");
var priceProduct = document.getElementById("priceProduct");
var decripProduct = document.getElementById("decripProduct");
var containerProduct = document.getElementById("containerProduct");

form_add.addEventListener("submit", function (e) {
  e.preventDefault();

  var child = document.createElement("div");
  child.className = "col-lg-3 p-0 shadow mx-4 my-2";
  child.innerHTML = `<div class="card" >
  <img src="Attack On Titan (15).jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">${nameProduct.value}</h3>
    <h5 class="text-primary">${priceProduct.value}</h5>
    <p class="card-text">${decripProduct.value}</p>
  </div>
</div>`;

  containerProduct.append(child);
  //   nameProduct.value = "";
  //   priceProduct.value = "";
  //   decripProduct.value = "";
  form_add.reset();
});

var form_message = document.getElementById("form-meesage");
var Nameee = document.getElementById("exampleInputName1");
var emailll = document.getElementById("exampleInputEmail1");
var comment = document.getElementById("comment");
var container_message = document.getElementById("container-message");

var childMessage = document.createElement("div");
childMessage.className = "message";

container_message.append(childMessage);

form_message.addEventListener("submit", function (e) {
  e.preventDefault();
  childMessage.innerHTML = `
 <h2 class="text-primary">Thank You</h2>
 <p>Thank you for your message, ${Nameee.value}! We'll get back to you at ${emailll.value} soon.</p>
 `;

  childMessage.style.display = "block";

  //   setTimeout(() => {
  //     childMessage.style.display = "none";
  //   }, 2000);
});

var num = 5;
if (num > 10) {
  setInterval(() => {
    console.log("llllll");
  }, 2000);
} else {
               
}
