gamestate = 0; //tijdelijk voor testen game
var circleColor = 'white'

var [WIDTH,HEIGHT, W,H] = [1000,500,1000,500]

let pause = false;
let NUMBALLS = 2;
let SPRING = 0.2;
let GRAVITY = 0.2;
let FRICTION = -0.7;
let BALLS = [];
let player1x = 100;
let player1y = 100;
let player1w = 80;
let player1h = 80;

//---------------------------------------------------------------//
function preload() {
  GAMEBACKGROUND = loadImage('Images/BasketballField.png');
  menu = loadImage('Images/menu.png');
}

//---------------------------------------------------------------//
function setup() {
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < NUMBALLS; i++) {
    BALLS[i] = new Ball(250, 60, 60, i, BALLS);
  }
  fill(255);
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
  image(menu, 0,0,WIDTH,HEIGHT);
}
//---------------------------------------------------------------//
function Gamemodepicker() {

}
//---------------------------------------------------------------//
function Playerpicker() {

}
//---------------------------------------------------------------//
function Maingame() {
  if (pause == false) {
    background(100);
    //image(GAMEBACKGROUND,0,0,1000,500);
    ellipse(player1x, player1y, player1w, player1h)
    Controls();
    BALLS.forEach(ball => {
      ball.collide();
      ball.move();
      ball.display();
    });
  }
  else{
    
  }
}

//---------------------------------------------------------------//
function Resultscreen() {

}
//---------------------------------------------------------------//
function Controls() {
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      player1x += 5;
    }
    if (keyCode == LEFT_ARROW) {
      player1x -= 5;
    }
    if (keyCode == UP_ARROW) {
      player1y -= 5;
    }
    if (keyCode == DOWN_ARROW) {
      player1y += 5;
    }
  }
}
//---------------------------------------------------------------//
function mouseClicked() {
  console.log("X:" + mouseX);
  console.log("Y:" + mouseY);
  if (gamestate == 0){
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
class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
    this.previousFrameCollision = false;
  }

  collide() {
    let currentFrameCollision = false;
    for (let i = this.id + 1; i < NUMBALLS; i++) { //Collision tussen meerdere ballen

      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;

      if (distance < minDist) {
        currentFrameCollision = true;

        if (!this.previousFrameCollision) {
          this.vx = 0;
          this.vy = 0;
          this.others[i].vx = 0;
          this.others[i].vy = 0;
          this.previousFrameCollision = true;
        }

        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * SPRING;
        let ay = (targetY - this.others[i].y) * SPRING;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }

    if (!currentFrameCollision) {
      this.previousFrameCollision = false;
    }

    let dx2 = player1x - this.x;
    let dy2 = player1y - this.y;
    let distance2 = sqrt(dx2 * dx2 + dy2 * dy2);
    let minDist2 = player1h / 2 + this.diameter / 2; //40 = straal hoofd

    if (distance2 <= minDist2) {

      let angle = atan2(dy2, dx2);
      let targetX = this.x + cos(angle) * minDist2;
      let targetY = this.y + sin(angle) * minDist2;
      let ax = (targetX - player1x) * SPRING;
      let ay = (targetY - player1y) * SPRING;
      this.vx -= ax;
      this.vy -= ay;
    }
  }

  move() {
    this.vy += GRAVITY;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= FRICTION;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= FRICTION;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= FRICTION;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= FRICTION;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
//---------------------------------------------------------------//
class Player1 {
  constructor(playerx, playery, playerw, playerh) {
    this.playerx = playerx;
    this.playery = playery;
    this.playerw = playerw;
    this.playerh = playerh;
  }

}