var gamestate = 2; //tijdelijk voor testen game





//---------------------------------------------------------------//
function preload() {
  GAMEBACKGROUND = loadImage('Images/BasketballField.png');
}
//---------------------------------------------------------------//
function setup() {
  createCanvas(1000, 500);
}
//---------------------------------------------------------------//
function draw() {

  if (gamestate == 0) {
    Startscherm();
  }

  if (gamestate == 1) {
    Playerpicker();

  }

  if (gamestate == 2) {
    Maingame();
  }

  if (gamestate == 3) {
    Resultscreen();
  }
}
//---------------------------------------------------------------//
function Startscherm() {
  
}
//---------------------------------------------------------------//
function Playerpicker() {
  
}
//---------------------------------------------------------------//
function Maingame() {
  background(100);
  //image(GAMEBACKGROUND,0,0,1000,500);
}
//---------------------------------------------------------------//
function Reultscreen() {
  
}
//---------------------------------------------------------------//