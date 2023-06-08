const quantity = document.querySelectorAll(".quantity");
const rate = document.getElementById("rate");
const price = document.querySelectorAll(".price");
const priceWithMoneySign = "$" + rate.value;

price.innerHTML = priceWithMoneySign;

function compile() {
    price.innerHTML = "$" + quantity.value * rate.value;
}