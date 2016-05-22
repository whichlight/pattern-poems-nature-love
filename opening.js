var h = 1500;
var w = 1500;

var pool = [];

var diff = -105;

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(10);
  createCanvas(w,h);
  angleMode(DEGREES);

}

var bw= 0;
var a = 0;
var draw = function(){
  bcol = color(340,1,0.8)
  fcol = color(20,1,1)
  background(bcol);
  if(pool.length<530){
  var num = 5;
  for(var i=0; i<num; i++){
      var p = new Shape(w/2+random(-100,100),random(h), random(360));
     pool.push(p);
  }
  }


  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }



  function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
  if(mouseIsPressed){
    saveCanvas('opening_'+paddy(frameCount,4)+'.png');
  }



}



mouseClicked = function(){
  }

function Shape(x,y, angle){
  this.x = x;
  this.initx = x;
  this.y = y;
  this.radius = 0;
  this.thickness = 50;
  this.angle = angle;
  this.angle_speed=map(Math.abs(h/2-this.y),0,h/2,10,0);
  this.growth = 4*random(0.5,1.5);
  this.speed = 4*random(6,10);
  this.rem=false;
  this.add = false;
//  var maxval= 100;
  this.direction = 1;
  if(this.x<w/2){this.direction=-1;}

  this.update = function(){
    this.radius+=this.growth;
    this.x+=this.direction*this.speed;

    if(this.x<-1*this.radius || this.x>(w+this.radius)){
      this.x=w/2;
      this.radius=0;

    }

    if(abs(this.x-w/2)>(w/4) && this.add==false){
      this.add=true;
      var p = new Shape(this.initx,this.y, this.angle);
      p.add=true;
     pool.push(p);
    }

  }

  this.render = function(){
//    i=Math.pow(abs(w/2-this.x),0.7);
    i = this.radius;
    push();
    translate(this.x, this.y);
    fill(fcol);
    noStroke();
    strokeWeight(15);
    ellipse(0,0,i,i);
    pop();
  }
}
