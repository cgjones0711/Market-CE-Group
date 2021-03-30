const URL = " https://v6.exchangerate-api.com/v6/c880451324935553df25617a/latest/USD";

let button1 = document.getElementById("button1");
let displayArea = document.getElementById("displayArea");


fetch(URL)
.then(response => response.json())
.then(function(data){
console.log(data);
button1.addEventListener("click", function(event){
    event.preventDefault();
    displayArea.textContent = data.conversion_rates.AUD;


    

})


})

