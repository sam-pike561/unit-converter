/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    convert(inputEl.value)
})

function convert(num) {
  let feet = (Math.floor((num * 3.281) * 1000) / 1000).toFixed(3)
  let meters = (Math.floor((num / 3.281) * 1000) / 1000).toFixed(3)
  let gallons = (Math.floor((num * 0.264) * 1000) / 1000).toFixed(3)
  let liters = (Math.floor((num / 0.264) * 1000) / 1000).toFixed(3)
  let pounds = (Math.floor((num * 2.204) * 1000) / 1000).toFixed(3)
  let kilograms = (Math.floor((num / 2.204) * 1000) / 1000).toFixed(3)

  
  lengthEl.innerHTML += `
    <li class="Text">
        ${num} meters = ${feet} meters | ${num} meters = ${meters} meters
    </li>`
  
  volumeEl.innerHTML += `
    <li class="Text">
        ${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters
    </li>`
    
      massEl.innerHTML += `
    <li class="Text">
        ${num} Killos = ${pounds} pounds | ${num} pounds = ${kilograms} kilos
    </li>`
  
  
  
  
  console.log(feet, meters, gallons, liters, pounds, kilograms)
}
