//Single element
// const form = document.getElementById("my-form");
// console.log(form);

// const form = document.querySelector("h1");
// console.log(form);
//**************************************************************************************** */
//Multiple Element
// const list = document.querySelectorAll(".item");
// console.log(list);

// const list = document.getElementsByClassName("item");
// console.log(list);

// const list = document.getElementsByTagName("li");
// console.log(list);
//**************************************************************************************** */
//Loop through elements

// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   console.log(item.textContent);
// });

//**************************************************************************************** */
//Manipulating the DOM
// const ul = document.querySelector(".items");
// // ul.remove();
// //ul.lastElementChild.remove()

// ul.firstElementChild.textContent = "Hello";
// ul.children[1].textContent = "Sagyam";
// ul.lastElementChild.innerHTML = "<h4>   Heading    </h4>";

// const btn = document.querySelector(".btn");
// btn.style.background = "green";

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   ul.remove();
// });

//**************************************************************************************** */
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please Enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} :   ${emailInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}
