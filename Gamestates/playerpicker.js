function Playerpicker() {
    background(0)
    fill(255, 255, 255, 255);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("Playerpicker", 500, 90);
    rect(40,200,200,200)
    rect(280,200,200,200)
    rect(520,200,200,200)
    rect(760,200,200,200)
  
    back.drawButton();
    skin1.drawButton();
    skin2.drawButton();
    skin3.drawButton();
    skin4.drawButton();
    
  
  if(beurt == 1){
    textAlign(CENTER);
    text("Player 1 is picking:",500,160);
    keuzep1 = keuze;
  }
  if(beurt == 2){
    textAlign(CENTER);
    text("Player 2 is picking:",500,160);
    textAlign(LEFT);
    text("Player 1 picked " + keuzep1 ,40,500);
    keuzep2 = keuze;
  }
  if(beurt == 3){
    gamestate = 2;
    
  }
  if(keuze == 1 && beurt == 1){
    fill(0,100);
    rect(40,200,200,200);
    fill(255);
    textAlign(LEFT);
    text("Player 1 picked 1",40,500);
    player1.skin = PLAYERIMG1;
    player1.handskin = PLAYERIMG1HAND;
    apply.drawButton();
  }
  if(keuze == 2 && beurt == 1){
    fill(0,100)
    rect(280,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 1 picked 2",40,500);
    player1.skin = PLAYERIMG2;
    player1.handskin = PLAYERIMG2HAND;
    apply.drawButton();
  }
  if(keuze == 3 && beurt == 1){
    fill(0,100)
    rect(520,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 1 picked 3",40,500);
    player1.skin = PLAYERIMG3;
    player1.handskin = PLAYERIMG3HAND;
    apply.drawButton();
  }
  if(keuze == 4 && beurt == 1){
    fill(0,100)
    rect(760,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 1 picked 4",40,500);
    player1.skin = PLAYERIMG4;
    player1.handskin = PLAYERIMG4HAND;
    apply.drawButton();
  }
  if(keuze == 1 && beurt == 2){
    fill(0,100);
    rect(40,200,200,200);
    fill(255);
    textAlign(LEFT);
    text("Player 2 picked 1",40,550);
    player2.skin = PLAYERIMG1;
    player2.handskin = PLAYERIMG1HAND;
    apply.drawButton();
  }
  if(keuze == 2 && beurt == 2){
    fill(0,100)
    rect(280,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 2 picked 2",40,550);
    player2.skin = PLAYERIMG2;
    player2.handskin = PLAYERIMG2HAND;
    apply.drawButton();
  }
  if(keuze == 3 && beurt == 2){
    fill(0,100)
    rect(520,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 2 picked 3",40,550);
    player2.skin = PLAYERIMG3;
    player2.handskin = PLAYERIMG3HAND;
    apply.drawButton();
  }
  if(keuze == 4 && beurt == 2){
    fill(0,100)
    rect(760,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 2 picked 4",40,550);
    player2.skin = PLAYERIMG4;
    player2.handskin = PLAYERIMG4HAND;
    apply.drawButton();
  }
  
}