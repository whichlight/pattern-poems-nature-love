var h = 1500;
var w = 1500;
var bcolor = 35;
var bsat = 1;
var fcolor = 180;

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
//  bcolor+=1;
  bcolor%=360;
  background(bcolor,1,bsat);
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }

  if(mouseIsPressed){
    saveCanvas('bubbly'+'_'+frameCount+'.png');
  }
}

var makeShape = function(x,y){
    var p = new Shape(x, y);
    pool.push(p);
}

mouseClicked = function(){
  //  var p = new Shape(mouseX, mouseY);
 //   pool.push(p);
// console.log(bcolor);
  }

function Shape(x,y){
  this.x = x;
  this.y = y;
  var maxval = 200;
  var minval = 60;
  this.direction = 1;
  if(random()<0.5){ this.direction=-1;}
  this.radius = random(minval,maxval);

  this.update = function(){

    if(this.radius>maxval || this.radius<minval){
        this.direction*=-1;
    }

    this.radius+=(this.direction*30);

  }

  this.render = function(){
    push();
    translate(this.x, this.y);

      stroke(fcolor,1,1);
      strokeWeight(50);
      fill(bcolor,1,bsat);
      ellipse(0,0,this.radius, this.radius);
    pop();
  }
}
