// const URL = " https://v6.exchangerate-api.com/v6/c880451324935553df25617a/latest/USD";
// let container = document.getElementById("container");

// let button1 = document.getElementById("button1");
// let displayArea = document.getElementById("displayArea");


fetch(URL)
.then(response => response.json())
.then(function(data){
console.log(data);
button1.addEventListener("click", function(event){
    event.preventDefault();
    


    
container.innerHTML = `<p>USD:</p>${"$ "+data.conversion_rates.USD}
<p>EUR:</p>${"€ "+data.conversion_rates.EUR}
<p>JPY:</p>${"¥ "+data.conversion_rates.JPY}
<p>GBP:</p>${"£"+data.conversion_rates.GBP}
<p>AUD:</p>${"$ "+data.conversion_rates.AUD}
<p>CAD:</p>${"$ "+data.conversion_rates.CAD}
<p>CHF:</p>${"º"+data.conversion_rates.CHF}
<p>VND:</p>${"₫ "+data.conversion_rates.VND}`




})


})

