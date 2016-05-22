var w=1500;
var h=1500;
var numLines = 20;
var dx = (w)/numLines;
var t = 0;
var d = 0;
var T = 30;
var bcolor = 190;
var fcolor = 60;

function setup(){
  frameRate(15);
  colorMode(HSB,360,1,1);
  createCanvas(w,h);
}

function draw(){
  background(bcolor,1,1);
  for(var i=0; i<numLines; i++){
   var thickness = 5+ T*(1+sin(radians(((t+i)*dx)/w)*360));
   wave(dx*i, thickness);
  }
  t+=1;


  function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
  if(mouseIsPressed){
    saveCanvas('sun_'+paddy(frameCount,4)+'.png');
  }

}

function wave(x, thick){
  push();
  translate(w/2,h/2);
  noFill();
  strokeWeight(thick);
  stroke(fcolor,1,1);
  ellipse(0,0,x*2,x*2);
  pop();
}
