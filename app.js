var value=1;
document.getElementById('stroke-setter').addEventListener('click', function () {
  value = document.getElementById('number').value;
});
document.getElementById('number').addEventListener("input", ()=>{
  value = document.getElementById('number').value;
});

document.getElementById('clear-canvas').addEventListener('click', function () {
    clear();
    background("black");
});


function setup() {
  let x =screen.width;
  let y = screen.height;
  createCanvas((y*65/100), y*65/100);
  background("black");
}

function draw() {
  // do nothing
}

function mouseDragged() {
  stroke(255);
  strokeWeight(value);
  line(mouseX, mouseY, pmouseX, pmouseY);
}







