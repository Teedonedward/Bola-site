const quantities = document.querySelectorAll(".quantity");
const rates = document.querySelectorAll(".rate");
const prices = document.querySelectorAll(".price");
const priceWithMoneySign = "₦" + rate.value;

price.innerHTML = priceWithMoneySign;

quantities.forEach(quantity, i) function() {
    console.log(quantity);
}

function compile() {
    price.innerHTML = "₦" + quantity.value[] * rate.value;
}