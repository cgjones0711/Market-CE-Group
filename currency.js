const URL = " https://v6.exchangerate-api.com/v6/c880451324935553df25617a/latest/EUR";

fetch(URL)
.then(response => response.json())
.then(function(data){
console.log(data);
})

