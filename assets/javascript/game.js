// variables
// ===================
var words=["korea", "biathlon", "skis", "snow"];
var wins = 0;
var loss = 0;
var userGuesses = [];
var wrongChoice = [];
var triesLeft = 10;
var spaces = [];
var choice = words[Math.floor(Math.random() * words.length)]
// functions
// ===================
// pick a word at random
function startGame(){
    var choice = words[Math.floor(Math.random() * words.length)];
    console.log(choice);
// get the underscores
    for(var i=0; i<choice.length; i++){
        spaces.push("_");
    }
// print underscores to screen
    document.getElementById("wordBlanks").textContent = spaces.join(" ");
// values reset
userGuesses = [];
wrongChoice = [];
triesLeft - 10;
document.getElementById("tries-left").textContent = triesLeft;   
};

// log users keys/guesses
document.onkeyup = function(event) {
    userGuesses = event.key;
    if(choice.indexOf(userGuesses) > -1) {
        console.log("yes");
    }
    else {
        wrongChoice.push(userGuesses);
        console.log(wrongChoice);
        triesLeft--;
        console.log(triesLeft);
    }

}





// main
// ===================
startGame ()