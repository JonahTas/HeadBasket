class Player {
  constructor(x, y, r, controls, color) {
    this.x = x;
    this.y = y;
    this.direction=1;
    this.handx;
    this.handy;
    this.controls = controls;
    this.color = color;
    this.speed = 5;
    this.gravity = 0.5;
    this.jumpSpeed = -15;
    this.ySpeed = 0;
    this.canJump = true;
    this.canThrow = true;
  }

  update() {
    this.handx = this.x + 45 * this.direction;
    
    
    if (this.controls === "wasd") {
      if (keyIsDown(87)) {
        this.jump();
      }
      if (keyIsDown(83) &&this.canThrow == true) {
        this.throw();
      }
      if (keyIsDown(83) == false) {
        this.handy = this.y +20;
      }
      if (keyIsDown(65)) {
        this.x -= this.speed;
        this.direction = -1
      }
      if (keyIsDown(68)) {
        this.x += this.speed;
        this.direction = 1
      }
    } else if (this.controls === "arrows") {
      if (keyIsDown(UP_ARROW)) {
        this.jump();
      }
       if (keyIsDown(DOWN_ARROW)) {
        this.throw();
      }
      if (keyIsDown(DOWN_ARROW) == false) {
        this.handy = this.y +20;
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
        this.direction = -1
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
        this.direction = 1
      }
    }
    if (player1.x > WIDTH -playerR) {
      player1.x = WIDTH - playerR;
    }
    if (player2.x > WIDTH-playerR) {
      player2.x = WIDTH - playerR;
    }
    if (player1.x - playerR< 0) {
      player1.x = 0 + playerR;
    }
    if (player2.x - playerR< 0) {
      player2.x = 0 + playerR;
    }

    this.ySpeed += this.gravity;
    this.y += this.ySpeed;

    if (this.y > HEIGHT - playerR) {
      this.y = HEIGHT - playerR
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

  throw(){
    this.handy = this.handy -20;
    console.log(this.handy)
    if(this.handy < this.y -50){
      this.handy = this.y +20;
    }
  }
  display(){
    fill(this.color);
    ellipse(this.x, this.y, playerR*2, playerR*2);
  }
}