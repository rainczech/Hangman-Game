// variables
// ===================
var words=["korea", "bobsled", "skis", "snow"];
var wins = 0;
var loss = 0;
var userGuesses = [];
var wrongChoice = [];
var triesLeft = 10;
var spaces = [];
var choice = "";
var correctChoice = 0;
var alphabetArray = ["a","b","c","d","e","f","g",
                    "h","i","j","k","l","m","n",
                    "o","p","q","r","s","t","u",
                    "v","w","x","y","z"];
// ==================
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

function win(){
    if(correctChoice === choice.length){
        alert("You Won!");
    } else if(triesLeft === 0){
        alert("Sorry! You lose!");
    }
};


// log users keys/guesses
document.onkeyup = function() {
    userGuesses = event.key.toLowerCase();
    if(alphabetArray.indexOf(userGuesses) > -1) {
        if(choice.indexOf(userGuesses)>-1){
        for(i=0; i<choice.length; i++) {
            if (choice[i] === userGuesses)
            {
                spaces[i]= userGuesses;
                document.getElementById("wordBlanks").textContent = spaces.join (" ");
                console.log(spaces);
                correctChoice++;
                win();
            }
        }
    } else {
        wrongChoice.push(userGuesses);
        console.log(wrongChoice);
        triesLeft--;
        console.log(triesLeft);
        document.getElementById("tries-left").textContent = triesLeft;
        win();
    }
    } else{
        alert("Letters Only!");

    }
};



// main
// ===================
startGame ()