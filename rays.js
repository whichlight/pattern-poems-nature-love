var h = 1500;
var w = 1500;

var pool = [];

var maxdiff = 10;
var diff =maxdiff;


var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);

 for(var i=-1000; i<h+1000; i+=150){
  var p = new Shape(0, i);
  pool.push(p);
  }
}

var draw = function(){
  fcol= color(5,1,1);
  bcol = color(150,1,1);
  background(bcol);

  push();
  rotate(-1*diff);
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }
  pop();

  push();
  rotate(2+diff);
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }
  pop();

  diff-=1;
  if(diff<0){diff=maxdiff}

  function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
  if(mouseIsPressed){
    saveCanvas('ribbon'+paddy(frameCount,4)+'.png');
  }


}


mouseClicked = function(){
    var p = new Shape(0, mouseY);
   // pool.push(p);
    console.log(diff);
  }

function Shape(x,y){
  this.x = x;
  this.y = y;
  this.radius = 40;
  this.linepoints = [];
  this.res = 100;
  this.max =100;



  this.update = function(){



  }

  this.render = function(){

    push();
    rotate(this.y/50-20);
    stroke(fcol);
    strokeWeight(60);
    noFill();
    line(this.y,-500,this.y, w+500);
    pop();
  }
}
