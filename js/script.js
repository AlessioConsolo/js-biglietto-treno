let km = prompt("Quanti Kilometri desideri percorrere?");
console.log(km);
let age = prompt("Quanti anni hai?");
console.log(age);
let price = 0.21 * km;

let perc_discount = 0;

if (age < 18) {
  perc_discount = 20;
} else if (age > 65) {
  perc_discount = 40;
}
if (age >= 18 && age <= 65) {
  perc_discount = 0;
}

console.log(perc_discount);
console.log(price);

let final_price = (perc_discount * price) / 100;
console.log(final_price.toFixed(2));

document.getElementById("price").innerText = final_price.toFixed(2);
