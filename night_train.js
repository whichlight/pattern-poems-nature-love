var w=1500;
var h=1500;
var numLines = 20;
var dx = (w)/numLines;
var t = 0;
var d = 0;
var T = 30;
var bcolor = 230;
var fcolor = 330;

function setup(){
  frameRate(15);
  colorMode(HSB,360,1,1);
  createCanvas(w,h);
  background(bcolor,1,1);
}

function draw(){
  background(bcolor,1,1);
  for(var i=0; i<numLines; i++){
   var thickness = 10+T*(1+sin(radians(((t+i)*dx)/w)*360));
   wave(dx*i, thickness);
  }
  t+=1;

}

function wave(x, thick){
  strokeWeight(thick);
  line(x,0,x,width);
  stroke(fcolor,1,1);
}
