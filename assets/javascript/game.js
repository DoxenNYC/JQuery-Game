var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetandStart = function(){
  $(".crystals").empty();
  var images = [
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/e/e4/4-Star_Crystal.png/revision/latest?cb=20151122000344',
    'https://mbch.guide/wp-content/uploads/crystal_multi_mystic.png',
    'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c4/Crystal_weekly_event.png/revision/latest?cb=20151122000423',
    'http://www.sclance.com/pngs/crystals-png/crystals_png_351496.png'
  ]

//Number randomizer
  random_result = Math.floor(Math.random() * 69) + 30;
  $("#result").html('Random Result: ' + random_result);
  for(var i=0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;
    var crystal = $("<div>");
        crystal.attr({
          "class": 'crystal',
          "data-random": random
        });
        crystal.css({
          "background-image":"url('" + images[i] + "')",
          "background-size":"cover",
        });
    $(".crystals").append(crystal);
  }
  $("#previous").html("Current Score: " + previous);
}

resetandStart();

//On click function for the crystals
$(document).on('click', ".crystal", function(){
  var num = parseInt($(this).attr('data-random'));
  previous += num;
  $("#previous").html("Total Score: " + previous);
    console.log(previous);
  if(previous > random_result){
      lost++;
      $("#lost").html("Total Losses: " + lost);
      previous = 0;
      resetandStart();
  }
  else if(previous === random_result){
      win++;
      $("#win").html("Total Wins: " + win);
      previous = 0;
      resetandStart();
  } 
});