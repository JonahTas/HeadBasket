//---------------------------------------------------------------//
function preload() {
  myFont = loadFont('Fonts/CursiveSans-Book.ttf');
  
  GAMEBACKGROUND = loadImage('Images/BasketballField.png');
  MENUBACKGROUND = loadImage('Images/MENUBACKGROUND.jpg');
  BLANKBACKGROUND = loadImage('Images/blankbackground.png');
  lebron = loadImage('Images/lebron.png');
  PLAYERIMG1 = loadImage('Images/players/PLAYERIMG1.png');
  PLAYERIMG2 = loadImage('Images/players/PLAYERIMG2.png');
  PLAYERIMG3 = loadImage('Images/players/PLAYERIMG3.png');
  PLAYERIMG4 = loadImage('Images/players/PLAYERIMG4.png');
  PLAYERIMG1HAND = loadImage('Images/players/PLAYERIMG1HAND.png');
  PLAYERIMG2HAND = loadImage('Images/players/PLAYERIMG2HAND.png');
  PLAYERIMG3HAND = loadImage('Images/players/PLAYERIMG3HAND.png');
  PLAYERIMG4HAND = loadImage('Images/players/PLAYERIMG4HAND.png');
  controlsbg = loadImage('Images/controls.png');
  maingamebackground = loadImage('Images/MAINGAMEBACKGROUND.png');
  maingamebackgroundnet = loadImage('Images/MAINGAMEBACKGROUNDNET.png');
  
  playerpickerbackgroundbutton = loadImage('Images/buttons/playerpickerbackground.png');
  applybutton = loadImage('Images/buttons/apply.png');
  backbutton = loadImage('Images/buttons/back.png');
  continuebutton = loadImage('Images/buttons/continue.png');
  controlsbutton = loadImage('Images/buttons/controls.png');
  menubutton = loadImage('Images/buttons/menu.png');
  pausebutton = loadImage('Images/buttons/pause.png');
  playerpickerbutton = loadImage('Images/buttons/playerpicker.png');
  settingsbutton = loadImage('Images/buttons/settings.png');
  
  backgroundmenumusic = loadSound('sounds/backmenumusic.mp3');
  maingamemusic = loadSound('sounds/gamemusic.mp3');
  ballPlayWOOOOO = loadSound('sounds/BALLLLL.mp3');
  jumpsound = loadSound('sounds/jumpsound.mp3');
  goalsound = loadSound('sounds/goalsound.mp3');
}
//---------------------------------------------------------------//
function setup() {
  gamestate = 0;
  createCanvas(WIDTH, HEIGHT);
  valSound = getItem('valSound');
  valMusic = getItem('valMusic');
   if (valSound === null) {
     valSound = 100;
     valMusic = 100;
   }
  
//---------------------------------//
  settings = new Button(((WIDTH/2)-(325/2)), 500, 325, 60, settingsbutton, function() {gamestate = 4;});
  playerpicker = new Button(((WIDTH/2)-(325/2)), 300, 325, 60, playerpickerbutton, function() {gamestate = 1;
  
  for (let i = 0; i < NUMBALLS; i++) {
    balls[i] = new Ball(500, 50, ballR*2, i, balls);
  }
  scoreP1 = 0;
  scoreP2 = 0;
  countedP1 = false;
  countedP2 = false;                                                          
  });
  controls = new Button(((WIDTH/2)-(325/2)), 400, 325, 60, controlsbutton, function() {gamestate = 0.5});
  back = new Button(900, 50, 50, 50, backbutton, function() { gamestate = 0});
  pause = new Button(((WIDTH/2)-(50/2)),50,50,50,pausebutton, function() { gamestate = 6});
  Continue = new Button(((WIDTH/2)-(325/2)), 215, 325, 65, continuebutton, function() {gamestate = 2});
  Menu  = new Button(((WIDTH/2)-(325/2)), 300, 325, 65, menubutton, function() {gamestate = 0; maingamemusic.stop(); backgroundmenumusic.loop(); });
  apply = new Button(850, 500, 100, 40, applybutton, function() {beurt = beurt + 1; keuze = 0;});
  

  skin1  = new ButtonPlayerPicker(40, 200, 200, 200, PLAYERIMG1, function() {keuze = 1;});
  skin2  = new ButtonPlayerPicker(280, 200, 200, 200, PLAYERIMG2, function() {keuze = 2;});
  skin3  = new ButtonPlayerPicker(520, 200, 200, 200, PLAYERIMG3, function() {keuze = 3;});
  skin4  = new ButtonPlayerPicker(760, 200, 200, 200, PLAYERIMG4, function() {keuze = 4;});
  
  
//---------------------------------//
  
  sliderMusic = createSlider(0, 100, valMusic);
  sliderMusic.position(350, 250);
  sliderMusic.style('width', '300px');
  sliderSound = createSlider(0, 100, valSound);
  sliderSound.position(350, 400);
  sliderSound.style('width', '300px');
}

//---------------------------------------------------------------//
function draw() {
  textFont(myFont);
  //Setting the music volume
  backgroundmenumusic.setVolume(valMusic/100);
  maingamemusic.setVolume(valMusic/100);
  //Setting SFX volume
  ballPlayWOOOOO.setVolume(valSound/100);
  jumpsound.setVolume((valSound * 0.07) / 100);
  goalsound.setVolume((valSound * 5)/100);
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
