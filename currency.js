const URL = " https://v6.exchangerate-api.com/v6/c880451324935553df25617a/latest/USD";

let button1 = document.getElementById("button1");
let displayArea = document.getElementById("displayArea");


fetch(URL)
.then(response => response.json())
.then(function(data){
console.log(data);
button1.addEventListener("click", function(event){
    event.preventDefault();
    // displayArea.textContent = data.conversion_rates.USD;
    // displayArea.textContent = data.conversion_rates.EUR;
    // displayArea.textContent = data.conversion_rates.JPY;
    // displayArea.textContent = data.conversion_rates.GBP;
    // displayArea.textContent = data.conversion_rates.AUD;
    // displayArea.textContent = data.conversion_rates.CAD;
    // displayArea.textContent = data.conversion_rates.CHF;
    // displayArea.textContent = data.conversion_rates.VND;
//    console.log(displayArea.textContent = data.conversion_rates.); 


})


})

