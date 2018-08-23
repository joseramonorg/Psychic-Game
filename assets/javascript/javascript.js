
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;
var invalidKeys = ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '', '¡', '`', '+', '´', 'ç', ',', '.', '.', '-', '<']
var invalidData = alert["Your choice is not a valid letter, duh!!!"]

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	farUserGuesses();
}

	var userGuess;

document.onkeyup = function(event) {

	if((event.keyCode>64 && event.keyCode<91) ||  (event.keyCode>96 && event.keyCode<123) ){
		if(letterUser.includes(String.fromCharCode(event.keyCode).toLowerCase())){
			alert("Your choice is a repeated letter, duh!!!");
		}else{
			guessesLeft--;
 			userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 			letterUser.push(userGuess);
			countGuessesLeft();
			farUserGuesses();
		}
	}else{
			alert("Your choice is not a letter, duh!!!");

	}

	
	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		alert("You win!!!!!!!!!!!!!");
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		alert("Try again. You lose");
		restart();
	}

	if (userGuess== invalidKeys){
	invalidData
	}

  };