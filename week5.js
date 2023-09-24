/*
    Paste the code for your week 5 exercise below.
*/

height = 300;
width = 300;

let x;
let y;

function setup(){
    createCanvas(300, 300);
    background(0,0,0);
    x = width / 2;
    y = height / 2;
}

function draw(){
    // Setting up my arrays for the spooky eyes and writing 
    let myWords = [];
    myWords[0]='DONT';
    myWords[1]='BLINK';
    let myFonts = [];
    myFonts[0]=textFont('The Serif Hand Extrablack');
    myFonts[1]=textFont('Engravers MT');
  // spooky eye code
    y=y+ 1.2;
    if(y > height){
        y = 20;
        x = x-30
    }
    fill (255,255,255)
    circle(x, y, 50);
    fill (230,0,0)
    circle (x, y, 30)
    fill (0,0,0)
    circle (x, y, 10)
    x=x+ 1.2;
    if(x > width){
        x = 10;
        // spooky writing code
        fill(230,0,0);  
        for(i=0; i<myWords.length; i++) {
            textFont (myFonts[i])
            textSize ( 30)
            text(myWords[i], random(300), random(300), 70, 80);
    
        }
    }
}