console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardTwo === cardFour) {
// 	alert("Sorry, try again.");
// } else if (cardTwo === cardThree) {
// 	alert("Sorry, try again.");
// } else {
// 	alert("You found a match!");
// }

var createCards = function () {
	var getGame = document.getElementById('game-board');
	for (var i = 0; i < 4; i++) {
		var createDiv = document.createElement('div');
		createDiv.className = 'card';
		getGame.appendChild(createDiv);
	}
	document.getElementsByClassName('card').setAttribute('id', 'game-board');
}

createCards();