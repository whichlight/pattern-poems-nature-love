var h = 1500;
var w = 1500;

var pool = [];


var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(2);
  createCanvas(w,h);
  angleMode(DEGREES);

  var num = 100;
  for(var i=0; i<num; i++){
      y =  random(h);
      var p = new Shape(random(0,w),y, random(360));
      pool.push(p);
  }



}

var draw = function(){
  bcol = color(200,1,1);
  fcol = color(120,1,1);

  background(bcol);



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
    saveCanvas('sun_'+paddy(frameCount,4)+'.png');
  }

}



mouseClicked = function(){
  }

function Shape(x,y, angle){
  this.x = x;
  this.y = y;
  this.maxval = 80;
  this.growth = 22;
  this.radius = random(this.maxval);
  this.direction=-1+2*floor(random(2));

  this.update = function(){
    this.radius+=(this.direction*this.growth);

    if(this.radius>this.maxval || this.radius<0){

        this.direction*=-1;
    }

    if(this.radius<0){this.radius=0;}
//    this.x+=this.radius/3;
    this.x%=(w+50);

  }

  this.render = function(){
    push();

    rectMode(CENTER);
    translate(this.x, this.y);
    rotate(-1*frameCount*10);
    fill(fcol);
    stroke(fcol);
    strokeWeight(20);

    i=this.radius;
    k=0;
        var sides = 6;
        var an = 360/sides;
        beginShape();
        for(var j=0; j<sides; j++){
            vertex((i-k)*cos(j*an), (i-k)*sin(j*an));
        }
        endShape(CLOSE);
    pop();
  }
}
