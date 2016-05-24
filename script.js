var begin = 0;
var end = 0;
var timeTaken = 0;
var fastestTime = 0;
var click = 0;
var timeSum = 0;
var averageTime = 0;

function reset() {
  averageTime = 0;
  click = 0;
  timeSum = 0;
  document.getElementById('average-time').innerHTML = averageTime + " s";  
}

function randomize() {
  var x = Math.floor(Math.random() * 300);
  var y = Math.floor(Math.random() * 300);
  var br = Math.floor(Math.random() * 50);
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var size = Math.floor(Math.random() * 50);
  document.getElementById('shape').style.borderRadius = br+"%";
  document.getElementById('shape').style.backgroundColor = "rgb("+red+","+green+","+blue+")";
  document.getElementById('shape').style.top = y+"px";
  document.getElementById('shape').style.left = x+"px";
  document.getElementById('shape').style.width = 50 + size + "px";
  document.getElementById('shape').style.height = 50 + size + "px";
  document.getElementById('shape').style.display = "block";
}

function calculateTime() {
  end = new Date().getTime();
  timeTaken = (end - begin)/1000;
  if(timeTaken < fastestTime || fastestTime == 0) {
    fastestTime = timeTaken;
  }
  document.getElementById('click-time').innerHTML = fastestTime + " s";
  begin = new Date().getTime();
}

function calculateAverage() {
  click++;
  timeSum += timeTaken;
  averageTime = timeSum/click;
  document.getElementById('average-time').innerHTML = averageTime + " s";
}

document.getElementById('start').onclick = function () {
  begin = new Date().getTime();
  document.getElementById('start').style.display = "none";
  randomize();
  document.getElementById('shape').style.display = "block";
}

document.getElementById('shape').onclick = function () {
  calculateTime();
  calculateAverage();
  document.getElementById('shape').style.display = "none";
  randomize();
}

document.getElementById('clear').onclick = function () {
  reset();
  document.getElementById('start').style.display = "block";
  document.getElementById('shape').style.display = "none";
}