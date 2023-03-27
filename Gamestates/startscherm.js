function Startscherm() {
  image(menu, 0, 0, WIDTH, HEIGHT);
  start.drawButton();
  playerpicker.drawButton();
  settings.drawButton();
  controls.drawButton();
  sliderMusic.hide();
  sliderSound.hide();
  backgroundmenumusic.loop();
}