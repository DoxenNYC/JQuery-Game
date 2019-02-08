var crystal1 = "assets/images/crystal1.jpg";
var crystal2 = "assets/images/crystal2.jpg";
var crystal3 = "assets/images/crystal3.jpg";
var crystal4 = "assets/images/crystal4.jpg";

var crystals = [crystal1, crystal2, crystal3, crystal4];


var crystalIds = ["crystal1", "crystal2", "crystal3", "crystal4"]

var crystalValues1 
var crystalValues2 
var crystalValues3 
var crystalValues4 

var crystalValues = 0;
var win = 0;
var loss = 0;

var randScore = Math.floor(Math.random() * (121-19)) + 19;


      // MAJOR TASK #1: DYNAMICALLY CREATE CRYSTAL IMAGES as buttons
      // =================================================================================

      // 1. Create a for-loop to iterate through the letters array.
      for (var i = 0; i < crystals.length; i++) {

        // Inside the loop...

        // 2. Create image tags
        var crystalBtn = $("<img>");

        // 3. adding attributes to the crystal images
        crystalBtn.attr("src", crystals[i]);
        crystalBtn.attr("id", crystalIds[i]);
        crystalBtn.attr("style", "width:120px; height:120px");

        
        // 4. Finally, append each crystal images
        $("#crystals").append(crystalBtn);

      }

      function compChoice(){
        randScore = Math.floor(Math.random() * (121-19)) + 19;
        $("#randScore").text(randScore);
        console.log(randScore);

      }

      function crystalRandom(){

        var arr = []

        while(arr.length < 4){
            var randomnumber = Math.floor(Math.random() * (13-1)) + 1;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        
        console.log(arr)
        
        crystalValues1 = arr[0];
        crystalValues2 = arr[1];
        crystalValues3 = arr[2];
        crystalValues4 = arr[3];

        console.log(crystalValues1);
        console.log(crystalValues2);
        console.log(crystalValues3);
        console.log(crystalValues4);

      }

      crystalRandom();

     
    

      $("#randScore").text(randScore);  

      $("#crystal1").on("click", function() {

        crystalValues += crystalValues1

        checkResult()

      });

      $("#crystal2").on("click", function() {

        crystalValues += crystalValues2

        checkResult()

      });

      $("#crystal3").on("click", function() {

        crystalValues += crystalValues3

        checkResult()

      });

      $("#crystal4").on("click", function() {

        crystalValues += crystalValues4

        checkResult()

      });

      console.log(randScore);

      function checkResult(){
        if (crystalValues === randScore){
          win ++
          $("#win").text(win);
          compChoice();
          crystalRandom();
          crystalValues = 0;
        } else if (crystalValues > randScore){
          loss ++
          $("#loss").text(loss);
          compChoice();
          crystalRandom();
          crystalValues = 0;
        }  
        $("#totalScore").text(crystalValues);
      }

      







    
