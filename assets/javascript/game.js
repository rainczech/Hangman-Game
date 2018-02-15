// variables
// ===================
var words=["korea", "biathlon", "skis", "snow"];
var wins = 0;
var loss = 0;
var userGuesses = [];
var wrongChoice = [ ];
var triesLeft = 10;
var spaces = [];
// functions
// ===================
// pick a word at random
function startGame(){
    var choice = words[Math.floor(Math.random() * words.length)];
    console.log(choice);
    console.log(choice.length);
// get the underscores
    for(var i=0; i<choice.length; i++){
        spaces.push("_");
    }
// print underscores to screen
    document.getElementById("wordBlanks").textContent = spaces.join(" ");
// reset
userGuesses = [];
triesLeft = 10; 
}:
// main
// ===================
startGame ()