class Button {
  constructor(x, y, w, h, image, action) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = image;
    this.action = action;
  }
  drawButton() {
    imageMode(CORNER);
    image(this.image, this.x, this.y, this.w, this.h);
  }
  clicked() {
    if (mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)) {
      this.action();
    }
  }
}
//---------------------------------------------------------------//
class ButtonPlayerPicker {
  constructor(x, y, w, h, skin, action) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.skin = skin;
    this.action = action;
  }
  drawButton() {
    image(playerpickerbackgroundbutton,this.x, this.y, this.w, this.h);
    image(this.skin, this.x+20, this.y+20, this.w-40, this.h-40);
  }
  clicked() {
    if (mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)) {
      this.action();
    }
  }
}