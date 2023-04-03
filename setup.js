//---------------------------------------------------------------//
function preload() {
  GAMEBACKGROUND = loadImage('Images/BasketballField.png');
  menu = loadImage('Images/menu.png');
  PLAYERIMG1 = loadImage('Images/players/PLAYERIMG1.png');
  PLAYERIMG2 = loadImage('Images/players/PLAYERIMG2.png');
  PLAYERIMG3 = loadImage('Images/players/PLAYERIMG3.png');
  PLAYERIMG4 = loadImage('Images/players/PLAYERIMG4.png');
  PLAYERIMG1HAND = loadImage('Images/players/PLAYERIMG1HAND.png');
  PLAYERIMG2HAND = loadImage('Images/players/PLAYERIMG2HAND.png');
  PLAYERIMG3HAND = loadImage('Images/players/PLAYERIMG3HAND.png');
  PLAYERIMG4HAND = loadImage('Images/players/PLAYERIMG4HAND.png');
  controlsbg = loadImage('Images/Controls.jpg');
  
  backgroundmenumusic = createAudio('sounds/backmenumusic.mp3');
  maingamemusic = createAudio('sounds/gamemusic.mp3');
}
//---------------------------------------------------------------//
function setup() {
  gamestate = 0;
  createCanvas(WIDTH, HEIGHT);
  valSound = getItem('valSound');
  valMusic = getItem('valMusic');
  
//---------------------------------//
  settings = new Button(345, 500, 325, 60, "Settings", 20, function() {gamestate = 4});
  playerpicker = new Button(345, 300, 325, 60, "Start", 20, function() {gamestate = 1;
 backgroundmenumusic.stop();
  
  for (let i = 0; i < NUMBALLS; i++) {
    balls[i] = new Ball(500, 50, ballR*2, i, balls);
  }
  scoreP1 = 0;
  scoreP2 = 0;
  countedP1 = false;
  countedP2 = false;                                                          
  });
  controls = new Button(345, 400, 325, 60, "Controls", 20,function() {gamestate = 0.5});
  back = new Button(900, 50, 50, 50, "X", 30, function() { gamestate = 0});
  pause = new Button((WIDTH)/2 -25,50,50,50,"||",30,function() { gamestate = 6});
  Continue = new Button(345, 215, 325, 65, "Continue", 20, function() {gamestate = 2});
  Menu  = new Button(345, 300, 325, 65, "Menu", 20, function() {gamestate = 0});
  apply = new Button(850, 500, 100, 40, "Apply", 20, function() {beurt = beurt + 1;
            keuze = 0                                                        });
  

  skin1  = new ButtonPlayerPicker(40, 200, 200, 200, "Rood", 20, function() {keuze = 1});
  skin2  = new ButtonPlayerPicker(280, 200, 200, 200, "Groen", 20, function() {keuze = 2});
  skin3  = new ButtonPlayerPicker(520, 200, 200, 200, "Blauw", 20, function() {keuze = 3});
  skin4  = new ButtonPlayerPicker(760, 200, 200, 200, "Geel", 20, function() {keuze = 4});
  
  
//---------------------------------//
  
  sliderMusic = createSlider(0, 100, 100);
  sliderMusic.position(350, 250);
  sliderMusic.style('width', '300px');
  sliderSound = createSlider(0, 100, 100);
  sliderSound.position(350, 400);
  sliderSound.style('width', '300px');
}

//---------------------------------------------------------------//
function draw() {
  backgroundmenumusic.volume(valMusic/100);
  maingamemusic.volume(valMusic/100);
  if (gamestate == 0) {
    Startscherm();
  }

  if (gamestate == 0.5) {
    Controls();
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

  if (gamestate == 4) {
    Settings();
  }

  if (gamestate == 6) {
    Pause();
  }

  if (gamestate == 7) {
    Eindscore();
  }
}
//---------------------------------------------------------------//
