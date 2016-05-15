var w=1500;
var h=1500;
var numLines = 20;
var dx = (w)/numLines;
var t = 0;
var d = 0;
var T = 30;

function setup(){
  frameRate(15);
  colorMode(HSB,360,1,1);
  createCanvas(w,h);
  background(0,0,100);
}

function draw(){
  background(0,0,1);
  for(var i=0; i<numLines; i++){
   var thickness = 5+ T*(1+sin(radians(((t+i)*dx)/w)*360));
   wave(dx*i, thickness);
  }
  t+=1;

}

function wave(x, thick){
  push();
  translate(w/2,h/2);
  noFill();
  strokeWeight(thick);
  stroke(0,0,0);
  ellipse(0,0,x*2,x*2);
  pop();
}
