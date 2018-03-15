document.addEventListener('DOMContentLoaded', displayFuture)

//An array of future visions, provided by site visitors
var ourFuture = [
  "the future is magic",
  "the future is solarpunk",
  "the future is consensual",
  "the future is exciting",
  "the future is dreamfilled"
]

var len = ourFuture.length;
var i = 0;

//Display each future vision in the center of the page, wiht a 3 second space between each one.
function displayFuture () {
  var future = document.getElementById('ourOptimisticFuture');
  future.innerHTML =  ourFuture[i]
  if(++i < len) {
    setTimeout(displayFuture, 3000)
  }
  //When you've run through the list, reset and start again (this is how we loop forever)
  else {
    i = 0
    setTimeout(displayFuture, 3000)
  }
}

//Hide Submission Box when the submission is clicked
function success () {
  var submitBox = document.getElementById('vision-submission')
  submitBox.classList.toggle('hidden')
}

