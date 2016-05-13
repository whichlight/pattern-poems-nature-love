var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);

  makeShape(0,h/2);
  makeShape(1500,h/2);
}

var draw = function(){
  background(0,0,0);
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }
}

var makeShape = function(x,y){
    var p = new Shape(x, y);
    pool.push(p);
}

mouseClicked = function(){
    var p = new Shape(mouseX, mouseY);
    pool.push(p);
  }

function Shape(x,y){
  this.x = x;
  this.y = y;
  this.radius = 3200;

  this.update = function(){
    this.radius+=20;

  }

  this.render = function(){
    push();
    translate(this.x, this.y);

    for(var i = this.radius; i>0; i-=200){
      if(i<3*w){
      stroke(1,0,1);
      strokeWeight(50);
 //     fill(0,0,1);
      noFill();
      ellipse(0,0,i, i);
     }
    }
    pop();
  }
}
