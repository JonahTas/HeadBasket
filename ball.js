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
      if (this.others[i] == balls[balls.length - 2]) {
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
    fill(255, 153, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
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
