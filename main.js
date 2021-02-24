// Add an ID to by button tag

// Select the button by its ID using document.querySelector

let depositBtn = document.querySelector("#savings-deposit")

// Add a click event listener for the deposit button so that when its clicked, alert the word "hello"

depositBtn.addEventListener("click", function() {
   //Get input tag with ID savings-amount
   let savingsAmount = document.querySelector("#savings-amount")
   let savingsBalance = document.querySelector("#savings-balance")
   savingsBalance.textContent = Number(savingsAmount.value) + Number(savingsBalance.textContent)
})

let withdrawBtn = document.querySelector("#savings-withdraw")

// Add a click event listener for the deposit button so that when its clicked, alert the word "hello"

withdrawBtn.addEventListener("click", function() {
   //Get input tag with ID savings-amount
   let savingsAmount = document.querySelector("#savings-amount")
   let savingsBalance = document.querySelector("#savings-balance")
   savingsBalance.textContent = Number(savingsBalance.textContent) - Number(savingsAmount.value)
})