var h = 1500;
var w = 1500;

var pool = [];

var maxdiff = 6;
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
  background(0,0,0);

  push();
  rotate(-1*diff);
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }
  pop();

  push();
  rotate(diff);
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }
  pop();

  diff-=0.5;
  if(diff<0){diff=maxdiff}
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
    stroke(1,0,1);
    strokeWeight(60);
    noFill();
    line(this.y,-500,this.y, w+500);
    pop();
  }
}
