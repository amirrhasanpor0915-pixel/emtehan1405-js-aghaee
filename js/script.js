"use strict"



const formEl = document.querySelector("form")
const inpEl = document.querySelector(".input")
const menuSelect = document.querySelector(".select")


const texBox = document.querySelector(".texBox")

// btn

const btnSub = document.querySelector(".btnSub")
const btnReset = document.querySelector(".btnReset")


const p = document.querySelector("p")



formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  p.innerHTML += `
<div>
<p>${menuSelect.value}</p>
<span>${inpEl.value}</span>
<span>${texBox.value}</span>
</div>
`
})


btnReset.addEventListener("click", () => {
  p.textContent = ""
})


















// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   p.innerHTML += `
//     <div>
//     <p>${menuSelect.value}</p>
//     <span>${inpEl.value}</span>
//     <span>${texBox.value}</span>
//     </div>
//     `;
// });
// btnReset.addEventListener("click", () => {
//   p.textContent = "";
// });