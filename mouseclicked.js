function mouseClicked() {
  if (gamestate == 0) {
    settings.clicked();
    playerpicker.clicked();
    controls.clicked();
    if (!backgroundmenumusic.isLooping()){
      backgroundmenumusic.loop();
    }

  
  }
  else if (gamestate == 0.5) {
    back.clicked();
  }
  else if (gamestate == 4) {
    back.clicked();
  }
  else if (gamestate == 2) {
    pause.clicked();
  }
  else if (gamestate == 6) {
    Continue.clicked();
    Menu.clicked();
  }
  else if (gamestate == 1) {
    skin1.clicked();
    skin2.clicked();
    skin3.clicked();
    skin4.clicked();
    back.clicked();
    apply.clicked();
  }
  else if (gamestate == 7) {
      Menu.clicked();
  }
  storeItem('valSound', valSound);
  storeItem('valMusic', valMusic);
}