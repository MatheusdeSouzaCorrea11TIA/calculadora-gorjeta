let bill = 0
let tipPercentage = 0
let people = 0
let buttonSelected = 0

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", () =>{
    bill = billInput.valueAsNumber
})

function receiveTipValue(value){
    tipPercentage = value / 100
}

function calculate(){
    let tipAmount = document.querySelector(".amount strong")
    let totalText = document.querySelector(".amount strong")
    let total = 0
    tipAmount.innerHTML = `$${total}`
}