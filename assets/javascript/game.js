// variables
// ===================
var words=["korea", "biathlon", "skis", "snow"];
var wins = 0;
var loss = 0;
var userGuesses = [];
var wrongChoice = [];
var triesLeft = 10;
var spaces = [];
var choice = "";
// var userGuesses = choice.fromCharCode(event.which).toLowerCase();
// functions
// ===================
// pick a word at random
function startGame(){
    choice = words[Math.floor(Math.random() * words.length)];
    console.log(choice);
// get the underscores
    for(var i=0; i<choice.length; i++){
        spaces.push("_");
    }
// print underscores to screen
    document.getElementById("wordBlanks").textContent = spaces.join(" ");
// values reset
// userGuesses = [];
wrongChoice = [];
triesLeft = 10;
document.getElementById("tries-left").textContent = triesLeft;   
};

// log users keys/guesses
document.onkeyup = function() {
    // userGuesses = event.key
    userGuesses = event.key.toLowerCase();
    if(choice.indexOf(userGuesses) > -1) {
        for(i=0; i<choice.length; i++) {
            if (choice[i] === userGuesses)
            {
                spaces[i]= userGuesses;
                console.log(spaces);
            }
        }
    }
    else {
        wrongChoice.push(userGuesses);
        console.log(wrongChoice);
        triesLeft--;
        console.log(triesLeft);
    }
};



// main
// ===================
startGame ()