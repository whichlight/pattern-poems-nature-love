var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);


  var num = 250;
  for(var i=0; i<num; i++){
    var r = random(0,500);
    var a = random(360);
    makeShape(random(0,w),random(0,h));
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
  var maxval = 200;
  var minval = 50;
  this.direction = 1;
  if(random()<0.5){ this.direction=-1;}
  this.radius = random(minval,maxval);

  this.update = function(){
    this.radius+=(this.direction*20);

    if(this.radius>maxval || this.radius<minval){
        this.direction*=-1;
    }


  }

  this.render = function(){
    push();
    translate(this.x, this.y);

      stroke(1,0,1);
      strokeWeight(50);
      fill(0,0,0.5);
      ellipse(0,0,this.radius, this.radius);
    pop();
  }
}
