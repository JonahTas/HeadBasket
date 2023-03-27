function mouseClicked() {
  if (gamestate == 0) {
    start.clicked();
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
      play.clicked();
  }
  if (gamestate == 1) {
    if(mouseY > 200 && mouseY < 400 && keuze == 1){       //playerpicker player1
      if(mouseX > 40 && mouseX < 240){     //1e keuze
        keuzeP1 = 1;
      }
      if(mouseX > 280 && mouseX < 480){    //2e keuze
        keuzeP1 = 2;
      }
      if(mouseX > 520 && mouseX < 720){    //3e keuze
        keuzeP1 = 3;
      }
      if(mouseX > 760 && mouseX < 960){    //4e keuze
        keuzeP1 = 4;
      }
    }
    if(mouseY > 200 && mouseY < 400 && keuze == 2){       //playerpicker player2
      if(mouseX > 40 && mouseX < 240){     //1e keuze
        keuzeP1 = 1;
      }
      if(mouseX > 280 && mouseX < 480){    //2e keuze
        keuzeP1 = 2;
      }
      if(mouseX > 520 && mouseX < 720){    //3e keuze
        keuzeP1 = 3;
      }
      if(mouseX > 760 && mouseX < 960){    //4e keuze
        keuzeP1 = 4;
      }
    }
    back.clicked();
  }
}