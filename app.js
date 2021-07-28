var value;
document.getElementById('stroke-setter').addEventListener('click', function () {
  value = document.getElementById('number').value;
});
// console.log(value);


var bgvalue="black";
document.getElementById('red').addEventListener('click', function () {
  bgvalue = "red";
});
document.getElementById('black').addEventListener('click', function () {
  bgvalue = "black";
});
document.getElementById('white').addEventListener('click', function () {
  bgvalue = "white";
});
// console.log(bgvalue);


function setup() {
  createCanvas(screen.width, screen.height);
  background(bgvalue);
}

function draw() {
  // do nothing
}


function mouseDragged() {
  stroke(225);
  strokeWeight(value);
  line(mouseX, mouseY, pmouseX, pmouseY);
}







