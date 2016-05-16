var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);

  for(var i=-150; i<h+300; i+=150){
  var p = new Shape(0, i);
  pool.push(p);
  }
}

var draw = function(){
  background(0,0,0);
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }
}


mouseClicked = function(){
    var p = new Shape(0, mouseY);
    pool.push(p);
  }

function Shape(x,y){
  this.x = x;
  this.y = y;
  this.radius = 40;
  this.linepoints = [];
  this.res = 150;
  this.max =150;
  this.start = frameCount;
  this.direction = -1;
  for(var i=0; i<w+150; i+=2*this.res){
    this.linepoints.push(0);
    this.linepoints.push(this.max);
  }

  this.update = function(){

    for(var i=1;i<this.linepoints.length; i+=2){
        this.linepoints[i]+=(this.direction*15);
    }
    if(this.linepoints[1]<-1*this.max){this.direction*=-1}
    if(this.linepoints[1]>this.max){this.direction*=-1}
  }

  this.render = function(){
    push();
    translate(0,this.y);
    stroke(1,0,1);
    strokeWeight(50);
    noFill();
    beginShape();
    for(var i=0;i<this.linepoints.length-1; i++){
      var l1 = this.linepoints[i];
      var l2 = this.linepoints[i+1];

     // line(i*this.res,l1,(i+1)*this.res, l2);
       vertex(i*this.res,l1)
       vertex((i+1)*this.res, l2);
    }


    endShape();

    pop();
  }
}
