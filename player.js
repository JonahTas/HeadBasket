class Player {
  constructor(x, y, r, controls, color) {
    this.x = x;
    this.y = y;
    this.controls = controls;
    this.color = "bright_yellow";
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
    if (player1.x > 1000 -playerR) {
      player1.x = 1000 - playerR;
    }
    if (player2.x > 1000-playerR) {
      player2.x = 1000 - playerR;
    }
    if (player1.x - playerR< 0) {
      player1.x = 0 + playerR;
    }
    if (player2.x - playerR< 0) {
      player2.x = 0 + playerR;
    }

    this.ySpeed += this.gravity;
    this.y += this.ySpeed;

    if (this.y > 500 - playerR) {
      this.y = 500 - playerR
      this.ySpeed = 0;
      this.canJump = true;
    }
  }


  jump() {
    if (this.canJump) {
      this.ySpeed = this.jumpSpeed;
      this.canJump = false;
    }
  }

  display(){
    
  }
}