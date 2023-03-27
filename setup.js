//---------------------------------------------------------------//
function preload() {
  GAMEBACKGROUND = loadImage('Images/BasketballField.png');
  menu = loadImage('Images/menu.png');
  PLAYERIMG1 = loadImage('Images/players/PLAYERIMG1.png');
  PLAYERIMG2 = loadImage('Images/players/PLAYERIMG2.png');
  backgroundmenumusic = createAudio('sounds/backmenumusic.mp3');
  maingamemusic = createAudio('sounds/gamemusic.mp3');
}
//---------------------------------------------------------------//
function setup() {
  gamestate = 0;
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < NUMBALLS; i++) {
    balls[i] = new Ball(500, 50, ballR*2, i, balls);
  }
//---------------------------------//
  
  player1 = new Player(100, HEIGHT-50, playerR*2, "wasd",PLAYERIMG1);
  player2 = new Player(WIDTH-100, HEIGHT-50, playerR*2, "arrows",PLAYERIMG2);
  
//---------------------------------//
  
  start = new Button(345, 215, 325, 65, "Start", 20, function() { gamestate = 2; backgroundmenumusic.stop()});// gamestate 2 tijdelijk
  settings = new Button(345, 330, 325, 60, "Settings", 20, function() {gamestate = 4});
  
  playerpicker = new Button(345, 445, 325, 55, "Playerpicker", 20, function() {gamestate = 1});

  controls = new Button(345, 530, 325, 50, "Controls", 20,function() {gamestate = 0.5});
    
  back = new Button(900, 50, 50, 50, "X", 30, function() { gamestate = 0});

  pause = new Button((WIDTH)/2 -25,50,50,50,"||",30,function() { gamestate = 6});

  play = new Button(345, 215, 325, 65, "Play", 20, function() {gamestate = 2});
  
  
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
  console.log(valMusic);
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
}
//---------------------------------------------------------------//
