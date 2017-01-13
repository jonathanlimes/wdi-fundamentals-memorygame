// var createCards = function () {
// 	var getGame = document.getElementById('game-board');
// 	for (var i = 0; i < 4; i++) {
// 		var createDiv = document.createElement('div');
// 		createDiv.className = 'card';
// 		getGame.appendChild(createDiv);
// 	}
// 	document.getElementsByClassName('card').setAttribute('id', 'game-board');
// }

// createCards();

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

var createBoard = function () {
	for (i=0; i<cards.length; i++) {
		var createCard = document.createElement('div');
		createCard.className = 'card';
		createCard.setAttribute('data-card', cards[i]);
		createCard.addEventListener('click', isTwoCards);
		board.appendChild(createCard);
		board.appendChild(createCard);
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card')==='king') {
			this.innerHTML = "<img alt='KING' src='http://i.imgur.com/210M6jZ.png'>";
		} else {
			this.innerHTML = "<img alt='QUEEN' src='http://i.imgur.com/dmhebHy.png'>";
		}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(card) {
	if (card[0] === card[1]) {
		alert("The cards match!");
	} else {
		alert("Not a match!");
	}
}

createBoard();