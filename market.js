let marqueeSelector = document.getElementById("marqueeSelector");

let sp500=document.getElementById("SP500")



// fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=S%26P&region=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "b7dd329672msh89d3093c2444b8ep1fce20jsn5949b7fbcaf1",
// 		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(function(data){
// 	manipulateData(data);



	
// 	for (let i = 0; i < data.news.length; i++) {
// 		// console.log(data.news[i].title);
// 		// console.log(data.news[i].link);
// 		let newsEl = document.createElement("a");
// 		let dotEl = document.createElement("span");
// 		dotEl.classList.add("dot");
// 		newsEl.textContent = data.news[i].title;
// 		marqueeSelector.appendChild(dotEl);
// 		marqueeSelector.appendChild(newsEl);
// 	}
	
	
	



// })
function manipulateData (marketData) {

};

SP500.addEventListener("click", function(event){
    event.preventDefault();
    


    
container.innerHTML = `<h4>S&P 500</h4> 
                        <p>    Quote Type: ${marketData.quotes[0].quoteType}</p>
                        <p> Symbol:  ${marketData.quotes[0].symbol}</p>
                        <p> Score: ${marketData.quotes[0].score} </p>`
                    


})