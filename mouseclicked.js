function mouseClicked() {
  if (gamestate == 0) {
    settings.clicked();
    playerpicker.clicked();
    controls.clicked();
   
  }
  if (gamestate == 0.5) {
    back.clicked();
  }
  if (gamestate == 4) {
    back.clicked();
  }
  if (gamestate == 2) {
      pause.clicked();
  }
if (gamestate == 6) {
      Continue.clicked();
      Menu.clicked();
  }
  if (gamestate == 1) {
    skin1.clicked();
    skin2.clicked();
    skin3.clicked();
    skin4.clicked();
    back.clicked();
    apply.clicked();
  }
 storeItem('valSound', valSound);
 storeItem('valMusic', valMusic);
}