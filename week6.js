let counter = 0
let myEyes = []
let mC = false
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 255); 
  for ( i=0; i<10; i++){
    let eye = {}; //open eyes
    eye.x = random(400);
    eye.y = random(400);
    eye.oed = 50; // outer eye diameter 
    eye.med = 30;// middle eye diameter 
    eye.ied = 10;// inner eye diameter 
    eye.oc = color('#fcfcfc'); // outer eye colour
    eye.mc = color ('#AF002A');
    eye.ic = color ('#000000');
    eye.closed = true;
    myEyes.push(eye)
  }
  
}
 
function draw() { //when to change the background
  if (mC == false){ 
    background(random(0, 255), 125, 125)    
    } 
}
function mouseClicked() { //first stage- creepy intro words
  mC = true 
  if (counter==0){
    background(0,0,0);
    let a = 'think';
    let b = 'you';  
    let c = 'can';
    let d = 'escape?'
    a = a.toUpperCase();
    b = b.toUpperCase();  
    c = c.toUpperCase();
    d = d.toUpperCase();
    fill('#AF002A')
    textFont('Engravers MT')
    textSize(30)
    text(a, 30, 30);
    text (b, 300, 40)
    text (c, 100, 350)
    text (d, 200, 400)
  }
  else if (counter==1){ // stage 2 -closed eyes 
    for (i=0; i<10; i++){
      circle (myEyes[i].x, myEyes[i].y, myEyes[i].oed)
      line (myEyes[i].x - 20, myEyes [i].y, myEyes[i].x + 20, myEyes [i].y)
    }
  }
  else if (counter==2){ // open eyes and more creepy words 
    let a = 'you';
    let b = 'thought';
    let c = 'wrong';
 
    clear()
    background ('#000000')
 
    for ( i=0; i<10; i++){
      fill (myEyes[i].oc);
      circle (myEyes[i].x, myEyes[i].y, myEyes[i].oed)
      fill(myEyes[i].mc);
      circle  (myEyes[i].x, myEyes[i].y, myEyes[i].med)
      fill(myEyes[i].ic);
      circle (myEyes[i].x, myEyes[i].y, myEyes[i].ied)
    }
    fill('#AF002A')
    textFont('Engravers MT')
    textSize(30)
    text(a, 30, 30);
    text (b, 200, 40)
    text (c, 100, 350)
  }
  else if (counter==3){ // conclusion/victory video 
    cnv = createDiv('<iframe width="400" height="400" src="https://www.youtube.com/embed/_WZCvQ5J3pk?&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>');
  // cnv = createDiv('<iframe width="400" height="400" src="https://www.youtube.com/embed/_WZCvQ5J3pk?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    cnv.position(-500,-500);
    cnv.position(0,0);
  }
  counter++
}

