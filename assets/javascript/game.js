// choose random target number
// when player clicks crystal - specific number is added to total
// if players total score matches random target, user wins
// if total score goes above random target, user loses
// reset game/new game function
// increment for wins/losses


var targetNumber = 9 + Math.floor(Math.random() * 120);
var numberOptions = [1 + Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 12)];
var counter = 0;
var crystalValue = 0;
var wincounter = 0;
var losscounter = 0;

 function newGame(){
    
    targetNumber = 9 + Math.floor(Math.random() * 120);
    numberOptions = [1 + Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 12)];
    counter = 0;
    $("#targetscore").text("Target Score: " + targetNumber);
    $("totalscore").text("New Score: 0");

    }

$(document).ready(function(){

   
    
    newGame();

    $("#crystal1").attr("data-crystalvalue", numberOptions[0]);
    $("#crystal2").attr("data-crystalvalue", numberOptions[1]);
    $("#crystal3").attr("data-crystalvalue", numberOptions[2]);
    $("#crystal4").attr("data-crystalvalue", numberOptions[3]);

    $("#crystal1").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        
        counter += crystalValue;
    
        $("#totalscore").text("New Score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
            wincounter++
            $("#wins").text("Wins: " + wincounter);
            newGame();
          }
      
          else if (counter >= targetNumber) {
            alert("You lose!!");
            losscounter++;
            $("#losses").text("Losses: " + losscounter);
            newGame();
          }
      });

      $("#crystal2").on("click", function() {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        
        counter += crystalValue;
    
        $("#totalscore").text("New Score: " + counter);
        
        if (counter === targetNumber) {
            alert("You win!");
            wincounter++
            $("#wins").text("Wins: " + wincounter);
            newGame();
          }
      
          else if (counter >= targetNumber) {
            alert("You lose!!");
            losscounter++;
            $("#losses").text("Losses: " + losscounter);
            newGame();
          }
    
      });

      $("#crystal3").on("click", function() {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        
        counter += crystalValue;
    
        $("#totalscore").text("New Score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
            wincounter++
            $("#wins").text("Wins: " + wincounter);
            newGame();
          }
      
          else if (counter >= targetNumber) {
            alert("You lose!!");
            losscounter++;
            $("#losses").text("Losses: " + losscounter);
            newGame();
          }
    
      });

      $("#crystal4").on("click", function() {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        
        counter += crystalValue;
    
        $("#totalscore").text("New Score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
            wincounter++
            $("#wins").text("Wins: " + wincounter);
            newGame();
          }
      
          else if (counter >= targetNumber) {
            alert("You lose!!");
            losscounter++;
            $("#losses").text("Losses: " + losscounter);
            newGame();
          }
    
      });

});


