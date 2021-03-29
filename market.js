// fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "b7dd329672msh89d3093c2444b8ep1fce20jsn5949b7fbcaf1",
// 		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(data => {
// 	manipulateData(data)
// })
// .catch(err => {
// 	console.error(err);
// });

// console.log(teslaData)

// function manipulateData (teslaData){

}
fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-watchlist-performance?userId=X3NJ2A7VDSABUI4URBWME2PZNM&pfId=the_berkshire_hathaway_portfolio&symbols=%5EGSPC&region=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b7dd329672msh89d3093c2444b8ep1fce20jsn5949b7fbcaf1",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});