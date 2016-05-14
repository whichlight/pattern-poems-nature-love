var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES)


  /*
  var num = 100;
  for(var i=0; i<num; i++){
    makeShape(random(w),random(h));
  }
  */
}

var bw= 0;
var a = 0;
var draw = function(){

    a+=61;
  background(0,0,0);

  if(frameCount%5==0){

   if(bw==0){
   makeShape(w/2,3*h/4, -90+a, bw);
   }else{

   makeShape(w/2,3*h/4, 90+a, bw);

   }
   console.log(bw);
   bw++;
   bw%=2;
  }

  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }
}

var makeShape = function(x,y, angle,col){
    var p = new Shape(w/2, h/2, angle, col);
    pool.push(p);
}

mouseClicked = function(){
    var p = new Shape(mouseX, mouseY);
    pool.push(p);
  }

function Shape(x,y, angle, col){
  this.x = x;
  this.y = y;
  this.radius = 0;
  this.thickness = 100;
  this.angle = angle;
  this.col = col;

  this.update = function(){
    this.radius+=20;
    if(this.radius>1.5*w){
      var index = pool.indexOf(this);
      if (index > -1) {
        pool.splice(index, 1);
      }
    }
  }

  this.render = function(){
    i=this.radius;
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    if(this.col!=0){

    fill(1,1,0);
    }else{

    fill(1,0,1);
    }
    noStroke();
    beginShape();


    vertex(i*cos(120), i*sin(120));
    vertex(i,0);
    vertex(i*cos(240), i*sin(240));
    endShape(CLOSE);


    pop();
  }
}
