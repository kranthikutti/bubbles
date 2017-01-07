var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (i = 0; i < 9; i++) {
    bubbles[i] = new bubble(random(0,width),random(0,height));
  }
}
function mousePressed() 
  {for(i=0;i<bubbles.length;i++)
   bubbles[i].clicked();
  }
function draw() {
//background(0);
  background(0,5,90);
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  if(bubbles.length>50)
  {bubbles.splice(0,1);}
}  

 // function mousePressed() 
 function mouseDragged()
  {bubbles.push(new bubble(mouseX,mouseY));
   for(i=0;i<bubbles.length;i++)
   bubbles[i].clicked();}
  function keyPressed()
  {bubbles.splice(0,1)}
function bubble(x,y)
 {this.x=x;
  this.y=y;
  this.col=color(255,0,150,90);
  this.display= function() {
       stroke(255);
       strokeWeight(4);
       fill( this.col);
       ellipse(this.x, this.y, 36, 36);
 }
  this.clicked = function ()
  { var d= dist(mouseX,mouseY,this.x,this.y)
    if(d<18)
    this.col = color(0,180,250,63);}
  this.move= function() {
       this.x = this.x + random(-1, 1);
       this.x = this.x + random(-1, 1);
      }
}
   // println(bubbles);