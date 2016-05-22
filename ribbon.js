var w=1500;
var h=1500;
var numLines = 10;
var dx = (w)/numLines;
var t = 0;
var d = 0;
var T = 30;

function setup(){
  frameRate(15);
  colorMode(HSB,360,1,1);
  createCanvas(w,h);

  rotate(1);
  translate(-200,-2*h/3);
}

function draw(){
  background(0,1,0.7);
  for(var i=0; i<numLines; i++){
   var thickness = 15+ T*(1+sin(radians(((t+i)*dx)/w)*360));
   wave(dx*i, thickness);
  }
  t+=1;

  function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
  if(mouseIsPressed){
    saveCanvas('ribbon'+paddy(frameCount,4)+'.png');
  }

}

function wave(x, thick){
  noFill();
  strokeWeight(25);
  stroke(180,1,1);
  for(var i =25*(x/dx); i<2*w; i+=50){
    var diff = 10*(i/200)+100*sin(radians(map(i,0,w,0,360)+20*frameCount+50*(x/dx)));
    line(1*i,x,i, x+diff);
  }

}
