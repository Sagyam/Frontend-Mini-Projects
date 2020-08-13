//Examine the DOM selector
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "123";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
/************************************************************************************ */
//Get Element by ID

// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// headerTitle.innerText = "New Title";
// headerTitle.innerHTML = "<h3> Header 3</h3>";
/************************************************************************************ */
// Get elemnts by class

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "#22ffcc";

// for (var i = 0; i <= items.length; i++) {
//   items[i].style.backgroundColor = "#22ffcc";
// }
/************************************************************************************ */
// Get elemnts by tag name

// var items = document.getElementsByTagName("li");

// for (var i = 0; i <= items.length; i++) {
//   items[i].style.backgroundColor = "#22ffcc";
// }
/************************************************************************************ */
// Get elemetns by query selector

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 8px #aaffaa";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Submit";
/************************************************************************************ */
//Query Selector All

// var title = document.querySelectorAll(".title");
// console.log(title);
// title[0].textContent = "Hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
// }

// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "ccc";
// }
/************************************************************************************ */
//Traversing the DOM

// var itemList = document.querySelector("#items");

//Parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

//Child Nodes
// console.log(itemList.childNodes);

//Children

// console.log(itemList.children);
// itemList.children[0].style.backgroundColor = " #a4529c";

// //first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello World";

// //last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Bye World";

//next sibling
// itemList.nextElementSibling.textContent = "Text";

//previous sibling
// itemList.previousElementSibling.textContent = "text";
/************************************************************************************ */

//Create new element
// var newDiv = document.createElement("div");

// newDiv.className = "newClass";
// newDiv.id = "newID";
// newDiv.setAttribute("newTitle", "newDiv");

// var newDivText = document.createTextNode("New Div Text");

// //Add text to new dov
// newDiv.appendChild(newDivText);

// //Insert new Div into DOM
// var newContainer = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// console.log(newDiv);

// newContainer.insertBefore(newDiv, h1);
/************************************************************************************ */
//Event listners

// var button = document.getElementById("button");
// var box = document.getElementById("box");

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mousemove", runEvent);

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mouseup", runEvent);

// function buttonClick(Event) {
//   document.getElementById("button").textContent = "Changed";
//   document.querySelector("#main").getElementsByClassName.backgroundClolor =
//     "#f4f4f4";
//   console.log(Event.target);
//   console.log(Event.target.id);
//   var output = document.getElementById("output");
//   output.innerHTML = "<h3>" + Event.target.id + "<h3>";
// }

// function runEvent(Event) {
//   output.innerHTML =
//     "<h3> MouseX: " + Event.offsetX + "</h3> <h3> MouseY: " + Event.offsetY;
//   document.body.style.backgroundColor =
//     "rgb(" + Event.offsetX + ", " + Event.offsetY + ", 40)";
// }
/************************************************************************************ */

//KeyEvent

var form = document.querySelector("form");
var itemInput = document.querySelector('input[type="text"]');
var select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
// itemInput.addEventListener("input", runEvent);
select.addEventListener("change", runEvent);

function runEvent(Event) {
  console.log(Event.type);
  //   document.getElementById("output").innerHTML = Event.target.value;
}
