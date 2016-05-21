var h = 1500;
var w = 1500;

var pool = [];

var diff = -105;

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);

  var num = 10;
  for(var i=0; i<num; i++){
      y =  random(h);
      var p = new Shape(random(0,w),y, random(360));
//      pool.push(p);
  }


  for(var i=-200; i<w+400; i+=200){
    for(var j=-200; j<h+400; j+=200){
      var p = new Shape(i+50,j+50, random(360));
      pool.push(p);
    }
  }

  translate(750,-350);
  rotate(45);
}

var bw= 0;
var a = 0;
var draw = function(){

  //diff = h/2 - mouseY;

  bcol = color(164,1,1);
  fcol = color(344,1,1);
  background(bcol);



  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }

  diff +=10;
  if(diff > 195){ diff = -105;}
}



mouseClicked = function(){
    var p = new Shape(mouseX, mouseY, random(360));
    //pool.push(p);
    console.log(diff);
  }

function Shape(x,y, angle){
  this.x = x;
  this.y = y;
  var d = Math.sqrt(pow((w/2-this.x),2) + pow((h/2-this.y),2));
  this.radius = 200;
  this.thickness = 100;
  this.angle = angle;
  this.angle_speed=map(Math.abs(h/2-this.y),0,h/2,10,0);
  var maxval= this.radius*2 ;
  var minval = this.radius*0.8;
  this.direction = -1;
  if(random()<0.5){this.direction=1}

  this.update = function(){
   // this.radius+=(this.direction*5);

    if(this.radius>maxval || this.radius<minval){
        this.direction*=-1;
    }


    this.angle+=this.angle_speed;

  }

  this.render = function(){
    i=this.radius;
    push();
    translate(this.x, this.y);
    fill(fcol);
    noStroke();
    strokeWeight(15);
    ellipse(0,0,i,i);

    fill(bcol);
    noStroke();
    var offset = map(this.x-w/2,-w/2,w/2,-1*this.radius/4,this.radius/4);
    ellipse(diff+offset,diff,i,i);

    pop();
  }
}
