var h = 1500;
var w = 1500;

var pool = [];

var fval = 25;
var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);

 for(var i=-500; i<h+2100; i+=50){
  var p = new Shape(0, i);
  pool.push(p);
  }

}

var deg=1;
var draw = function(){
//  fval++;
  fval%=360;

  bcol = color(210,1,0.8);
  fcol = color(fval,1,1);

  background(bcol);
  push()

  rotate(-1*deg);
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }
  pop();
  deg+=1;
  deg%=10;
  function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
  if(mouseIsPressed){
    saveCanvas('mtns'+paddy(frameCount,4)+'.png');
  }


}


mouseClicked = function(){
  }

function Shape(x,y){
  this.x = x;
  this.y = y;
  this.radius = 40;
  this.linepoints = [];
  this.res = 100;
  this.max =50;
  this.start = frameCount;
  this.direction = -1;
  var val = this.max;


  for(var i=0; i<w+800; i+=2*this.res){
    this.linepoints.push(0);
    this.linepoints.push(val);
  }

  this.update = function(){

    for(var i=1;i<this.linepoints.length; i+=2){
      //  this.linepoints[i]+=(this.direction*5);
    }
    if(this.linepoints[1]<-1*this.max){
      for(var i=0;i<this.linepoints.length; i++){
        this.linepoints[i]=0;
      }
    }
  }

  this.render = function(){
    push();
    translate(w/2,0);
   rotate(this.y/20);
   // translate(0,this.y);
    stroke(fcol);
    strokeWeight(15);
    noFill();
    beginShape();
    for(var i=0;i<this.linepoints.length-1; i++){
      var l1 = this.linepoints[i];
      var l2 = this.linepoints[i+1];

     // line(i*this.res,l1,(i+1)*this.res, l2);
       vertex(i*this.res,l1)
       vertex((i+1)*this.res, l2);
    }

    for(var i=this.linepoints.length-1;i>=0; i--){
      var l1 = this.linepoints[i];
      var l2 = this.linepoints[i+1];

     // line(i*this.res,l1,(i+1)*this.res, l2);
   //    vertex(i*this.res,l1+20)
  //     vertex((i+1)*this.res, l2+20);
    }

    endShape();

    pop();
  }
}
