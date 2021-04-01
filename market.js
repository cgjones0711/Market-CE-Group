let marqueeSelector = document.getElementById("marqueeSelector");

let sp500=document.getElementById("SP500")
let SPDR=document.getElementById("SPDR")
let EMINI=document.getElementById("E-MINI")
let VANGUARD=document.getElementById("VANGUARD")
let STPK=document.getElementById("STPK")



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
// function manipulateData (marketData) {

// };

// SP500.addEventListener("click", function(event){
//     event.preventDefault();
    


    
// container.innerHTML = `<h4>S&P 500</h4> 
//                         <p>    Quote Type: ${marketData.quotes[0].quoteType}</p>
//                         <p> Symbol:  ${marketData.quotes[0].symbol}</p>
//                         <p> Score: ${marketData.quotes[0].score} </p>`
                    


// })
// SPDR.addEventListener("click", function(event){
//     event.preventDefault();
    


    
// container.innerHTML = `<h4>${marketData.quotes[1].longname}</h4> 
//                         <p> Quote Type: ${marketData.quotes[1].quoteType}</p>
//                         <p> Symbol:  ${marketData.quotes[1].symbol}</p>
//                         <p> Score: ${marketData.quotes[1].score} </p>`
                    


// })
// EMINI.addEventListener("click", function(event){
//     event.preventDefault();
    


    
// container.innerHTML = `<h4>${marketData.quotes[2].shortname}</h4> 
//                         <p> Quote Type: ${marketData.quotes[2].quoteType}</p>
//                         <p> Symbol: ${marketData.quotes[2].symbol}</p>
//                         <p> Score: ${marketData.quotes[2].score} </p>`
                    


// })
// VANGUARD.addEventListener("click", function(event){
//     event.preventDefault();
    


    
// container.innerHTML = `<h4>${marketData.quotes[3].longname}</h4> 
//                         <p> Quote Type: ${marketData.quotes[3].quoteType}</p>
//                         <p> Symbol:  ${marketData.quotes[3].symbol}</p>
//                         <p> Score: ${marketData.quotes[3].score} </p>`
                    


// })
// STPK.addEventListener("click", function(event){
//     event.preventDefault();
    


    
// container.innerHTML = `<h4>${marketData.quotes[4].longname}</h4> 
//                         <p>    Quote Type: ${marketData.quotes[4].quoteType}</p>
//                         <p> Symbol:  ${marketData.quotes[4].symbol}</p>
//                         <p> Score: ${marketData.quotes[4].score} </p>`
                    


// })

var userNameInput = document.querySelector("#userName");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#user-Name");
var userPasswordSpan = document.querySelector("#user-password");
renderLastRegistered();
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}
function renderLastRegistered() {
  var userNameInput = localStorage.getItem("email");
  var password = localStorage.getItem("password");
  if (!userNameInput || !password) {
    return;
  }
  userNameSpan.textContent = userNameInput;
  userPasswordSpan.textContent = password;
}
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  var userNameInput = document.querySelector("#userName").value;
  var password = document.querySelector("#password").value;
  if (userNameInput === "") {
    displayMessage("error", "User Name cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    localStorage.setItem("userName", userNameInput);
    localStorage.setItem("password", password);
    renderLastRegistered();
  }
});