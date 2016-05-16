var h = 1500;
var w = 1500;

var pool = [];

var diff = -105;

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);






}

var bw= 0;
var a = 0;
var draw = function(){

  background(0,0,0);
  var num = 5;
  for(var i=0; i<num; i++){
      var p = new Shape(w/2+random(-100,100),random(h), random(360));
     pool.push(p);
  }


  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }

}



mouseClicked = function(){
    var p = new Shape(mouseX, mouseY, random(360));
    pool.push(p);
  }

function Shape(x,y, angle){
  this.x = x;
  this.y = y;
  this.radius = 0;
  this.thickness = 50;
  this.angle = angle;
  this.angle_speed=map(Math.abs(h/2-this.y),0,h/2,10,0);
  this.growth = random(0.5,1.5);
  this.speed = random(6,10);
//  var maxval= 100;
  this.direction = 1;
  if(this.x<w/2){this.direction=-1;}

  this.update = function(){
    this.radius+=this.growth;
    this.x+=this.direction*this.speed;

  }

  this.render = function(){
//    i=Math.pow(abs(w/2-this.x),0.7);
    i = this.radius;
    push();
    translate(this.x, this.y);
    fill(0,0,1);
    noStroke();
    strokeWeight(15);
    ellipse(0,0,i,i);
    pop();
  }
}
