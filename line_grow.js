var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);

  bcol= color(10,1,1);
  fcol= color(310,0.5,1);
  background(bcol);
}

var draw = function(){

  var num = 1;
  for(var i=0; i<num; i++){
    var p = new Shape(-20+random(w+40),-40+random(20), random(360));
    pool.push(p);
  }



  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }

  /*
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    if (p.rem){
      var index = pool.indexOf(p);
      if (index > -1) {
        pool.splice(index, 1);
      }
    }
  }

  */
}



mouseClicked = function(){
    var p = new Shape(mouseX, mouseY, random(360));
    pool.push(p);
  }

function Shape(x,y, angle){
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.rem = false;
  this.speed = 10+random(20);

  this.radius = 0;

  this.update = function(){

    if(!this.rem){
    this.radius+=this.speed;
    }



    if(this.radius>h+50){
        this.rem=true;
    }
  }

  this.render = function(){
    push();
    translate(this.x, this.y);
    stroke(fcol);
    fill(bcol);
    strokeWeight(20);
    rect(0,0,50,this.radius);
    pop();
  }
}
