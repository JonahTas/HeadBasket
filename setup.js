function preload() {
  GAMEBACKGROUND = loadImage('Images/BasketballField.png');
  menu = loadImage('Images/menu.png');
}
//---------------------------------------------------------------//
function setup() {
  gamestate = 0;
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < NUMBALLS; i++) {
    balls[i] = new Ball(250, ballR*2, ballR*2, i, balls);
  }
  player1 = new Player(100, 100, playerR*2, "wasd");
  player2 = new Player(600, 100, playerR*2, "arrows");
}
//---------------------------------------------------------------//
function draw() {

  if (gamestate == 0) {
    Startscherm();
  }

  if (gamestate == 0.5) {
    Gamemodepicker();
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
function mouseClicked() {
  console.log("X:" + mouseX);
  console.log("Y:" + mouseY);
  if (gamestate == 0) {
    if (mouseX < 670 && mouseX > 345) {
      if (mouseY < 280 && mouseY > 215) {
        gamestate = 2;
      }
      if (mouseY < 390 && mouseY > 330) {
        gamestate = 2;
      }
    }
  }
}