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
  fill(255);
  player1 = new Player(100, 100, 50, "wasd");
  player2 = new Player(200, 100, 50, "arrows");
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
    player1.display();
    player2.update();
    player2.display();
    
    balls[balls.length - 1].x = mouseX;
    balls[balls.length - 1].y = mouseY;

    balls.forEach(ball => {
      if (ball != balls[balls.length - 1]) {
        ball.collide();
        ball.move();
      }
    });

    balls.forEach(ball => {
      ball.display();
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
class Ball {
  constructor(xin, yin, din, idin, oin,) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < NUMBALLS; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);

      let angle = vangle(dx, dy, this.vx, this.vy);
      let otherAngle = vangle(-dx, -dy, this.others[i].vx, this.others[i].vy);

      let speed = sqrt(this.vx * this.vx + this.vy * this.vy);
      let otherSpeed = sqrt(this.others[i].vx * this.others[i].vx + this.others[i].vy * this.others[i].vy);

      if (this.others[i] == balls[balls.length - 1]) {
        otherSpeed = 0;
      }

      let rSpeed = cos(angle) * speed;
      let rOtherSpeed = cos(otherAngle) * otherSpeed;

      if (rSpeed < 0) rSpeed = 0;
      if (rOtherSpeed < 0) rOtherSpeed = 0;

      let minDist = this.others[i].diameter / 2 + this.diameter / 2 + rSpeed * 2 + rOtherSpeed * 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
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
class Player {
  constructor(x, y, w, controls) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.controls = controls;
    this.speed = 5;
    this.gravity = 0.5;
    this.jumpSpeed = -15;
    this.ySpeed = 0;
    this.canJump = true;
  }

  update() {
    if (this.controls === "wasd") {
      if (keyIsDown(87)) {
        this.jump();
      }
      if (keyIsDown(65)) {
        this.x -= this.speed;
      }
      if (keyIsDown(68)) {
        this.x += this.speed;
      }
    } else if (this.controls === "arrows") {
      if (keyIsDown(UP_ARROW)) {
        this.jump();
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
      }
    }
    if (player1.x + (this.w/2) > 1000) {
      player1.x = 1000 - (this.w/2);
    }
    if (player2.x + (this.w/2) > 1000) {
      player2.x = 1000 - (this.w/2);
    }
    if (player1.x - (this.w/2) < 0) {
      player1.x = 0 + (this.w/2);
    }
    if (player2.x - (this.w/2) < 0) {
      player2.x = 0 + (this.w/2);
    }

    this.ySpeed += this.gravity;
    this.y += this.ySpeed;

    if (this.y > 500 - (this.w/2)) {
      this.y = 500- (this.w/2);
      this.ySpeed = 0;
      this.canJump = true;
    }
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.w, this.w);
  }

  jump() {
    if (this.canJump) {
      this.ySpeed = this.jumpSpeed;
      this.canJump = false;
    }
  }
}
//---------------------------------------------------------------//
function distance(x1, y1, x2, y2) {
  return sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
function vlength(x, y) {
  return distance(0, 0, x, y);
}
function vdot(x1, y1, x2, y2) {
  return x1 * x2 + y1 * y2;
}
function vangle(x1, y1, x2, y2) {
  if (vlength(x1, y1) == 0 || vlength(x2, y2) == 0) {
    return 0;
  }

  return acos(vdot(x1, y1, x2, y2) / (vlength(x1, y1) * vlength(x2, y2)));
}
//---------------------------------------------------------------//