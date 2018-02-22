
alert("Hello");
console.log("Hello")

window.onload = function() {
  
setTimeout(timeUp, 1000 * 90);

var panel = $("#quiz-area");

  var counterStartNumber = 30;

  var questions = [
    {

function timeUp() {

  console.log(questions);

  var timer;

  var game = {

    Question: questions,
    currentQuestion: 0,
    counter: counterStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
      game.counter--;
 
    }

  }

  $(document).on("click","#start", function() {
  // console.log("Hello")
    $("sub-wrapper").prepend("<h2> Time Left <span id='counter-number'")
  })

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");




var timer = {

  time: 90,

  reset: function() {

    timer.time = 90;
    

    
    $("#display").text("90");


    $("#answers").text("");
  },
  start: function() {



  }
//    timer.time--;