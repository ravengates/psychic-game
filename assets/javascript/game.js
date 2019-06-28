//array of options for the computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var GuessesLeft = 9;
var guessesSoFar = [];

//an alert anytime user presses something on the keyboard.
//capture what user is actually pressing

document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();
    guessesSoFar.push(userguess);


    //create random index of computer array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var resetGuessesLeft = function () {
        GuessesLeft = 9;
        document.querySelector('#psychicGame').innerHTML = '';
    }



    console.log(computerGuess);

    //compare to win or loss.
    //create code that keeps track of the wins and losses.

    if (userguess === computerGuess) {
        wins++;
        GuessesLeft = 8;
        resetGuessesLeft();
        guessesSoFar.length = 0;
    }

    else {
        GuessesLeft--;


    }
    if (GuessesLeft === 0) {
        losses++;
        GuessesLeft = 9;
        resetGuessesLeft();
        guessesSoFar.length = 0;

    }







    // create html interface that records losses and wins

    var html = "<h1> Psychic Game </h1> " +
        "<p> Guess what letter I'm thinking of</p>" +
        "<p> Wins: " + wins + "</p>" +
        "<p> Losses: " + losses + "</p>" +
        //Guesses Left: needs to show 9 starting out, then decrease by each guess made till 0
        "<p>Guesses Left: " + GuessesLeft + "</p>" +
        "<p> Your Guesses so far: " + guessesSoFar.join(',') + "</p>";

    document.querySelector('#psychicGame').innerHTML = html;


}


