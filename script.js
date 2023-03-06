gamestate = 0; //tijdelijk voor testen game
var circleColor = 'white'

var [WIDTH, HEIGHT, W, H] = [1000, 500, 1000, 500]

let pause = false;
let NUMBALLS = 3;
let SPRING = 0.3;
let GRAVITY = 0.2;
let FRICTION = -0.9;
let balls = [];

//---------------------------------------------------------------//
function preload() {
  GAMEBACKGROUND = loadImage('Images/BasketballField.png');
  menu = loadImage('Images/menu.png');
}
//---------------------------------------------------------------//
function setup() {
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < NUMBALLS; i++) {
    balls[i] = new Ball(250, 60, 60, i, balls);
  }
  player1 = new Player(100, 100, 60, "wasd");
  player2 = new Player(600, 100, 60, "arrows");
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
function Startscherm() {
  image(menu, 0, 0, WIDTH, HEIGHT);
}
//---------------------------------------------------------------//
function Gamemodepicker() {
  console.log("X:" + mouseX);
  console.log("Y:" + mouseY);
  if (gamestate == 0, 5) {
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
//---------------------------------------------------------------//
function Playerpicker() {

}
//---------------------------------------------------------------//
function Maingame() {
  if (pause == false) {
    background(100);

    player1.update();
    player2.update();
    
    
    balls[balls.length - 1].x = player1.x;
    balls[balls.length - 1].y = player1.y;
    balls[balls.length - 2].x = player2.x;
    balls[balls.length - 2].y = player2.y;

    balls.forEach(ball => {
      if (ball != balls[balls.length - 1] && ball != balls[balls.length - 2]) {
        ball.collide();
        ball.move();
      }
    });

    balls.forEach(ball => {
      ball.display();
      fill(0, 255, 0);
    });
  }
  if (pause == true) {

  }
}
//---------------------------------------------------------------//
function Resultscreen() {

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
//---------------------------------------------------------------//

