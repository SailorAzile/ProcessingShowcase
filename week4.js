/*
    Paste the code for your week 4 exercise below.

*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(255, 204, 238);
let midx = 200;
let midy = 200;
 fill (51, 51, 0);
circle( midx, midy, 300);
  
  let a = 'We are';
  let b = 'always'
  let c = 'WATCHING' ;
  fill(50);
  textFont ('Matura MT Script Capitals')
  textSize ( 30)
text(a, 20, 20, 70, 80);
  text (b, 300, 40, 70, 80)
  textFont ('Engravers MT')
  text (c, 100, 350, 70, 80)
 
  fill (255, 0, 0);
circle (midx, 150, 20);
  circle(100, 150, 20);
  let x = 150
  let y = 80
  
  fill (255, 102, 204)
  ellipse(x, x ,80,y );
  
  
  fill (255, 0, 0);
   circle(x, x, 50);
  
  
  // it took me a very long time to figure out how to make the teeth 
  angleMode(DEGREES);
    translate( 150, 300);
rotate(180);
  noStroke();
   fill( 209, 224, 224 )
  triangle(30-3, 75-3, 58-3, 20-3, 86-3, 75-3)
  fill( 255 );
 triangle(30, 75, 58, 20, 86, 75);
  
  translate( -100, 0);
rotate (360);
  noStroke();
  fill( 209, 224, 224 )
  triangle(30-3, 75-3, 58-3, 20-3, 86-3, 75-3);
  fill( 255 );
 triangle(30, 75, 58, 20, 86, 75);
 

}


  
  
  