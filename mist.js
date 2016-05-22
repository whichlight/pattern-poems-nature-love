var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(10);
  createCanvas(w,h);
  angleMode(DEGREES);

}

var draw = function(){

  if(pool.length<180){
  var num = 1;
  for(var i=0; i<num; i++){
    var a = random(360);
    var r = random(500);
    var p = new Shape(w/2+ r *cos(a),h/2+ r*sin(a), random(360));
    pool.push(p);
  }
  }


  background(270,1,0.85);

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
    saveCanvas('mist'+paddy(frameCount,4)+'.png');
  }
}



mouseClicked = function(){
    var p = new Shape(mouseX, mouseY, random(360));
    pool.push(p);
  }

function Shape(x,y, angle){
  this.x = x;
  this.y = y;

  this.d = pow((w/2 -this.x),2) + pow((h/2-this.y),2);
  this.d = this.d;
  this.radius = 100;
  var maxval= this.radius*2 ;
  var minval = this.radius*0.8;

  this.update = function(){

    this.radius-=8;



    if(this.radius<20){
        this.radius = 100
        /*
        var index = pool.indexOf(this);
        if (index > -1) {
            pool.splice(index, 1);
        }
        */

    }
  }

  this.render = function(){
    i=this.radius;
    push();
    translate(this.x, this.y);
    noStroke();
    fill(180,0.5,1);
    rectMode(CENTER);
    rotate(40);
    rect(0,0,this.radius, this.radius);
    pop();
  }
}
