var h = 1500;
var w = 1500;
var rw = 50;

var pool = [];

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(10);
  createCanvas(w,h);
  angleMode(DEGREES);

  bcol= color(10,1,1);
  fcol= color(310,0.5,1);
  background(bcol);
}

var draw = function(){

    var num = 2;

    for(var i=0; i<num; i++){
      var p = new Shape(-20+random(w+40));
      pool.push(p);
    }



  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
    p.render();
  }

  /*
  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    if (p.rem){

    }
  }

  */

  function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
  if(mouseIsPressed){
    saveCanvas('bamboo_'+paddy(frameCount,4)+'.png');
  }
}



mouseClicked = function(){
  }

function Shape(x){
  this.x = x;
  this.rem = false;
  this.speed = 20+random(20);

  this.radius = 0;

  this.update = function(){

    this.radius+=this.speed;



    if(this.radius>h+50){
      /*
        var index = pool.indexOf(this);
        if (index > -1) {
            pool.splice(index, 1);
        }

        */
    }
  }

  this.render = function(){
    push();
    translate(this.x, 0);
    stroke(fcol);
    fill(bcol);
    strokeWeight(20);
    rect(0,0,rw,this.radius);
    pop();
  }
}
