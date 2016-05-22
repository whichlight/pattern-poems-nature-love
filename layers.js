var h = 1500;
var w = 1500;

var pool = [];
var res = 40;
var gline = [];
var diff = 0;

var setup = function(){
  colorMode(HSB, 360,1,1)
  frameRate(15);
  createCanvas(w,h);
  angleMode(DEGREES);

  gline = [];

  for(var i=0; i<w+100; i+=res){
    gline.push(-1*200*sin(map(i,0,w,0,180)));
  }


  for(var j=-1000; j<h+500;j+=100){
    var a = 0;
    for(var i=0;i<gline.length; i+=1){
      a+=random(-10,10);
      gline[i]+=a;
    }

    console.log(gline[0]);
    var p = new Shape(0, j, gline);
    pool.push(p);

  }


}

var draw = function(){
    fcol = color(140,1,0.8);
    bcol = color(30,1,1);
  background(bcol);

/*
  for(var i=0; i<w+50; i+=100){
    line(i,0,i,h);
    stroke(1,0,1);
   // strokeWeight(map(mouseY,0,h,90,10));
    noFill();
  }

  */


  for(var i=0;i<pool.length; i++){
    var p = pool[i];
    p.update();
  }

  var rend = floor(map(diff,0,h,15,pool.length-2));

  if(rend<=6){rend=6;}
  if(rend>=pool.length){render = pool.length-1;}

  for(var i=rend-1;i>=0; i--){
    var p = pool[pool.length-i-1];
    p.render();
  }

 // diff=h/2+h/2*sin(frameCount*10);

  diff+=150;
  diff%=h;
  function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
  if(mouseIsPressed){
    saveCanvas('layers_'+paddy(frameCount,4)+'.png');
  }
}



mouseClicked = function(){
  }

function Shape(x,y, line){
  this.x = x;
  this.y = y;
  this.linepoints = line.slice(0);

  this.update = function(){

    for(var i=0;i<this.linepoints.length; i+=1){

    }


  }

  this.render = function(){
    push();

    var vert = map(diff, 0,h,this.y/2, this.y/1.5);
    translate(0,h/3+vert);

    if(pool.indexOf(this)%2==1){
      fill(fcol);
    stroke(fcol);
    strokeWeight(20);
    }
    else{

    stroke(bcol);
    strokeWeight(20);
      fill(bcol);
    }
   // beginShape();
      for(var i=0;i<this.linepoints.length; i+=1){
   //     vertex(i*res,map(diff,-100,h,this.linepoints[i]/4,2*this.linepoints[i]));
        var rad = map(diff,0,h,20,150);
        ellipse(i*res,map(diff,-10,h,0,2*this.linepoints[i]), rad,rad);

      }
   // vertex(w,h);
   // vertex(0,h);
    //endShape(CLOSE);
    pop();
  }
}
