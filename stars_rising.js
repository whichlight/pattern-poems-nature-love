var h = 1500;
var w = 1500;

var pool = [];
var gres = 35;
var rot = 10;

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);



  for(var i=-500; i<h+500; i+=(h/gres)){
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
  this.radius = 100;
  this.linepoints = [];
  this.res = w/gres * 2;
  this.start = frameCount;
  this.speed = sin(this.y/1.2)*10;
  for(var i=0; i<w+1000; i+=this.res){
    //this.linepoints.push(this.radius*sin(i/1.5));
    this.linepoints.push(0);
  }

  this.update = function(){

    for(var i=0;i<this.linepoints.length; i++){
      //this.linepoints[i]=this.radius*(sin(i*5 + (frameCount-this.start)*this.speed));
    }
  }

  this.render = function(){
    push();
    //translate(0,-100*sin(5*frameCount+(this.y)/10));
    translate(0,(-5*frameCount+(this.y)));
    translate(-20,this.y-1500);

    rotate(rot);

    //rotate(5*sin(5*frameCount+10*(this.y/20)));
    fill(1,0,1);
    noStroke();

    for(var i=0;i<this.linepoints.length; i++){

        translate(0,10*i);
        this.radius = 20+50*(1+sin(frameCount*5+50*i*this.y/10));
        ellipse(this.res*i,this.y,this.radius, this.radius);
    }
    pop();
  }
}
