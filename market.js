// fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-watchlist-performance?userId=X3NJ2A7VDSABUI4URBWME2PZNM&pfId=the_berkshire_hathaway_portfolio&symbols=%5EGSPC&region=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "b7dd329672msh89d3093c2444b8ep1fce20jsn5949b7fbcaf1",
// 		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(function(data){
// console.log(data);
// })

fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=S%26P&region=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b7dd329672msh89d3093c2444b8ep1fce20jsn5949b7fbcaf1",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(function(data){
console.log(data);
})