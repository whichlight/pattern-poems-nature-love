var w=1500;
var h=1500;
var numLines = 20;
var dx = (w)/numLines;
var t = 0;
var d = 0;
var T = 30;

function setup(){
  frameRate(15);
  colorMode(HSB,360,100,100,100);
  createCanvas(w,h);
  background(0,0,100);
}

function draw(){
  background(0,0,100);
  for(var i=0; i<numLines; i++){
   var thickness = T*(1+sin(radians(((t+i)*dx)/w)*360));
   wave(dx*i, thickness);
  }
  t+=1;

}

function wave(x, thick){
  strokeWeight(thick);
  line(0,x,width,x);
  stroke(0,0,0,100);
}
