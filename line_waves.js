var h = 1500;
var w = 1500;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(10);
  createCanvas(w,h);
  angleMode(DEGREES);

  var j = 0;
  for(var i=0; i<h+500; i+=80){
  var p = new Shape(0, i, j);
  pool.push(p);
  j++;
  }
}

var draw = function(){
  background(210,1,1);
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
    saveCanvas('waves_'+paddy(frameCount,4)+'.png');
  }


}


mouseClicked = function(){
  }

function Shape(x,y,index){
  this.x = x;
  this.y = y;
  this.radius = 40;
  this.linepoints = [];
  this.res = 10;
  this.start = frameCount;
  var ind = 1+(index)%4;
  if(ind == 4){ind = 2;}
  this.speed = -1* ind*3*12//floor(random(1,3))*this.radius/4;//sin(this.y/1.2)*10;
  for(var i=0; i<w+20; i+=this.res){
    //this.linepoints.push(this.radius*sin(i/1.5));
    this.linepoints.push(0);
  }

  this.update = function(){

    for(var i=0;i<this.linepoints.length; i++){
      this.linepoints[i]=this.radius*(sin(i*7 + (frameCount-this.start)*this.speed));
    }
  }

  this.render = function(){
    push();
    translate(0,this.y);
    stroke(150,1,1);
    strokeWeight(50);
    noFill();
    for(var i=0;i<this.linepoints.length-1; i++){
      var l1 = this.linepoints[i];
      var l2 = this.linepoints[i+1];

      line(i*this.res,l1,(i+1)*this.res, l2);
    }
    pop();
  }
}
