function Startscherm() {
  imageMode(CORNER)
  image(MENUBACKGROUND, 0, 0, WIDTH, HEIGHT);
  image(lebron,75,150,150,200);
  playerpicker.drawButton();
  settings.drawButton();
  controls.drawButton();
  sliderMusic.hide();
  sliderSound.hide();
  
  beurt = 1;
  keuze = 0;
  var valMusic = 100;
  var valSound = 100; 
  
  player1 = new Player(100, HEIGHT-50, playerR*2, "wasd");
  player2 = new Player(WIDTH-100, HEIGHT-50, playerR*2, "arrows");
}