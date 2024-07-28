var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClikedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function(){
   if(!started){
      $("#level-title").text("level " + level);
      nextSequence();
      started = true;
   }
});
$(".btn").click(function(){
   var userChoosenColor = $(this).attr("id");
   userClikedPattern.push(userChoosenColor);
   playsound(userChoosenColor);
   animate(userChoosenColor);
   checkAnswer(userClikedPattern.length-1);

});
function checkAnswer(currentLevel) {

   
   if (gamePattern[currentLevel] === userClikedPattern[currentLevel]) {

     console.log("success");

     
     if (userClikedPattern.length === gamePattern.length){

       
       setTimeout(function () {
         nextSequence();
       }, 1000);

     }

   } 
   else {
     console.log("wrong");
     playsound("wrong");

      $("body").addClass("game-over");
     setTimeout(function () {
       $("body").removeClass("game-over");
     }, 200);

     $("#level-title").text("Game Over, Press Any Key to Restart");
     startover();

   }

}
function nextSequence(){
   userClikedPattern = [];
   level++;
   $("#level-title").text("level " + level);
   var randomNumber = Math.floor((Math.random()*4));
   var randomChooseColors = buttonColors[randomNumber];
   gamePattern.push(randomChooseColors);
$("#" + randomChooseColors).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChooseColors);
}
function playsound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
audio.play();

}
 function animate(currentColor){
   $("#" + currentColor).addClass("pressed");

   setTimeout(function(){
      $("#" + currentColor).removeClass("pressed")

   },100);



 }
 function startover(){
   level = 0;
   gamePattern = [];
   started = false;
 }