var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(10);
  createCanvas(w,h);
  angleMode(DEGREES);

  for(var i=-150; i<h+300; i+=150){
  var p = new Shape(0, i);
  pool.push(p);
  }
}

var bval = 340;
var draw = function(){
  background(bval,1,1);
 // bval +=1;
  bval %=360;
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
    saveCanvas('bolt'+paddy(frameCount,4)+'.png');
  }
}


mouseClicked = function(){
    var p = new Shape(0, mouseY);
    console.log(bval);
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
  this.offset=0;
  for(var i=0; i<w+300; i+=2*this.res){
    this.linepoints.push(0);
    this.linepoints.push(this.max);
  }

  this.update = function(){
    this.offset +=(150/10.0);

    for(var i=1;i<this.linepoints.length; i+=2){
        this.linepoints[i]+=(this.direction*30);

    }
    if(this.linepoints[1]<-1*this.max){

      for(var i=1;i<this.linepoints.length; i+=2){
        this.linepoints[i]=150;
      }

      this.offset =0;
    }
//    if(this.linepoints[1]>this.max){this.direction*=-1}
  }

  this.render = function(){
    push();
    translate(0,this.y);
    stroke(60,1,1);
    strokeWeight(50);
    noFill();
    beginShape();
    for(var i=0;i<this.linepoints.length-1; i++){
      var l1 = this.linepoints[i];
      var l2 = this.linepoints[i+1];

     // line(i*this.res,l1,(i+1)*this.res, l2);
       vertex(-150+this.offset+i*this.res,l1)
       vertex(-150+this.offset+(i+1)*this.res, l2);
    }


    endShape();

    pop();
  }
}
