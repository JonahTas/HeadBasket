class Button {
  constructor(x, y, w, h, text, size, action) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
    this.size = size;
    this.action = action;
  }
  drawButton() {
    fill(255, 0, 0,255)
    rect(this.x, this.y, this.w, this.h);
    fill(255,255,255,255)
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text(this.text, this.x + this.w * 0.5, this.y + this.h * 0.5);
  }
  clicked() {
    if (mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)) {
      this.action();
    }
  }
}
//---------------------------------------------------------------//
class ButtonPlayerPicker {
  constructor(x, y, w, h, text, size, action) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
    this.size = size;
    this.action = action;
  }
  drawButton() {
    fill(255, 0, 0,255)
    rect(this.x, this.y, this.w, this.h);
    fill(255,255,255,255)
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text(this.text, this.x + this.w * 0.5, this.y + this.h * 0.5);
  }
  clicked() {
    if (mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)) {
      this.action();
    }
  }
}