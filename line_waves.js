var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);

  for(var i=0; i<h+500; i+=80){
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
  this.res = 10;
  this.start = frameCount;
  this.speed = sin(this.y/1.2)*10;
  for(var i=0; i<w+20; i+=this.res){
    //this.linepoints.push(this.radius*sin(i/1.5));
    this.linepoints.push(0);
  }

  this.update = function(){

    for(var i=0;i<this.linepoints.length; i++){
      this.linepoints[i]=this.radius*(sin(i*5 + (frameCount-this.start)*this.speed));
    }
  }

  this.render = function(){
    push();
    translate(0,this.y);
    stroke(1,0,1);
    strokeWeight(50);
    noFill();
    for(var i=0;i<this.linepoints.length-1; i++){
      var l1 = this.linepoints[i];
      var l2 = this.linepoints[i+1];

      line(i*this.res,l1,(i+1)*this.res, l2);
    }
    pop();
  }
}
