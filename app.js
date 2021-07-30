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



//download feature
const myCanvas = document.getElementsByTagName('canvas');
const btnDownload = document.getElementById('download');

btnDownload.addEventListener('click', ()=>{
  const dataURI = myCanvas[0].toDataURL();
  document.getElementById('downloadable').src = dataURI;
  document.getElementById('linker').href = dataURI;
})





// Eraser Feature
var f=1;
document.getElementById('Erase').addEventListener('click', function () {
  if(f==1){
    document.getElementById('Erase').innerHTML="Untoggle Eraser";
    f=0;
  }
  else{
    document.getElementById('Erase').innerHTML="Toggle Eraser";
    f=1;
  }
});




//P5 functions
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
  if(f==1)stroke(255);
  else stroke(0);
  // stroke(255);
  strokeWeight(value);
  line(mouseX, mouseY, pmouseX, pmouseY);
}


var canva = document.getElementsByTagName('canvas');
console.log(canva[0]);







