var h = 1500;
var w = 1500;

var pool = [];


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


  for(var i=-200; i<w+400; i+=100){
    for(var j=-200; j<h+400; j+=100){
      var p = new Shape(i,j, random(360));
      pool.push(p);
    }
  }

}

var bw= 0;
var a = 0;
var draw = function(){

  background(0,0,0);



  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }

}



mouseClicked = function(){
    var p = new Shape(mouseX, mouseY, random(360));
    //pool.push(p);
  }

function Shape(x,y, angle){
  this.x = x;
  this.y = y;
  this.par = random(200);
  this.radius = 50;
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
    i=this.radius*(1+cos(frameCount*10+((this.x-this.y)/5)+this.par));
    push();
    translate(this.x, this.y);
    fill(0,0,1);
    noStroke();
    rect(0,i,this.radius+50,i);
    pop();
  }
}
