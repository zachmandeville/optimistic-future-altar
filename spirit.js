document.addEventListener('DOMContentLoaded', displayFuture)

var ourFuture = [
  "the future is magic",
  "the future is solarpunk",
  "the future is consensual",
  "the future is exciting",
  "the future is dreamfilled"
]

var len = ourFuture.length;
var i = 0;

function displayFuture () {
  var future = document.getElementById('ourOptimisticFuture');
  future.innerHTML =  ourFuture[i]
  if(++i < len) {
    setTimeout(displayFuture, 3000)
  }
  else {
    i = 0
    setTimeout(displayFuture, 3000)
  }
}

