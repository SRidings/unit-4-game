
var wins = 0, loses = 0, scores;
var crystals = [];

var number;

var total = document.getElementById("totalScore");

var results = document.getElementById("results");

startGame();

function startGame(){
    
    scores = 0;
    
    number = Math.floor(Math.random() * (121 - 19) + 19);
    document.getElementById("ranNumber").innerHTML = number;   
    
    for(var i = 0; i < 4; ++i){
        crystals[i] = Math.floor(Math.random() * (13 - 1) + 1);
    }
    
    total.innerHTML = scores;
    
    results.innerHTML = "Wins: " + wins + "<br>Loses: " + loses;

}

function addScore(id){
    scores += crystals[parseInt(id) - 1];
    total.innerHTML = scores;
    if(scores == number){
        alert("You win!");
        ++wins;
        startGame();
    }
    else if(scores > number){
        alert("You lose!"); 
        ++loses;
        startGame();
    }      
}
    
