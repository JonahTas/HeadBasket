class Player {
  constructor(x, y, w, controls, color) {
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
    if (player1.x > 1000-30) {
      player1.x = 1000 - 30
    }
    if (player2.x > 1000-30) {
      player2.x = 1000 - 30
    }
    if (player1.x - 30< 0) {
      player1.x = 0 + 30
    }
    if (player2.x - 30< 0) {
      player2.x = 0 + 30
    }

    this.ySpeed += this.gravity;
    this.y += this.ySpeed;

    if (this.y > 500 - 30) {
      this.y = 500 - 30
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
}