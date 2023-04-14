function Playerpicker() {
    image(BLANKBACKGROUND, 0, 0, WIDTH, HEIGHT);
  
    back.drawButton();
    skin1.drawButton();
    skin2.drawButton();
    skin3.drawButton();
    skin4.drawButton();
    
  
  if(beurt == 1){
    fill(89, 255);
    textAlign(CENTER, CENTER);
    textSize(60);
    text("Player 1 is picking:",500,90);
    keuzep1 = keuze;
  }
  if(beurt == 2){
    textAlign(CENTER);
    textSize(60);
    text("Player 2 is picking:",500,90);
    textAlign(LEFT);
    textSize(50);
    text("Player 1 picked " + keuzep1 ,40,480);
    keuzep2 = keuze;
  }
  if(beurt == 3){
    gamestate = 2;
    
  }
  if(keuze == 1 && beurt == 1){
    fill(0,100);
    rect(40,200,200,200);
    fill(89,255);
    textSize(50);
    textAlign(LEFT);
    text("Player 1 picked 1",40,480);
    player1.skin = PLAYERIMG1;
    player1.handskinleft = PLAYERIMG1HANDLEFT;
    player1.handskinright = PLAYERIMG1HANDRIGHT;
    apply.drawButton();
  }
  if(keuze == 2 && beurt == 1){
    fill(0,100)
    rect(280,200,200,200)
    fill(89, 255)
    textSize(50);
    textAlign(LEFT);
    text("Player 1 picked 2",40,480);
    player1.skin = PLAYERIMG2;
    player1.handskinleft = PLAYERIMG2HANDLEFT;
    player1.handskinright = PLAYERIMG2HANDRIGHT;
    apply.drawButton();
  }
  if(keuze == 3 && beurt == 1){
    fill(0,100)
    rect(520,200,200,200)
    fill(89, 255)
    textSize(50);
    textAlign(LEFT);
    text("Player 1 picked 3",40,480);
    player1.skin = PLAYERIMG3;
    player1.handskinleft = PLAYERIMG3HANDLEFT;
    player1.handskinright = PLAYERIMG3HANDRIGHT;
    apply.drawButton();
  }
  if(keuze == 4 && beurt == 1){
    fill(0,100)
    rect(760,200,200,200)
    fill(89, 255)
    textSize(50);
    textAlign(LEFT);
    text("Player 1 picked 4",40,480);
    player1.skin = PLAYERIMG4;
    player1.handskinleft = PLAYERIMG4HANDLEFT;
    player1.handskinright = PLAYERIMG4HANDRIGHT;
    apply.drawButton();
  }
  if(keuze == 1 && beurt == 2){
    fill(0,100);
    rect(40,200,200,200);
    fill(89, 255);
    textAlign(LEFT);
    text("Player 2 picked 1",40,550);
    player2.skin = PLAYERIMG1;
    player2.handskinleft = PLAYERIMG1HANDLEFT;
    player2.handskinright = PLAYERIMG1HANDRIGHT;
    apply.drawButton();
  }
  if(keuze == 2 && beurt == 2){
    fill(0,100)
    rect(280,200,200,200)
    fill(89, 255)
    textSize(50);
    textAlign(LEFT);
    text("Player 2 picked 2",40,550);
    player2.skin = PLAYERIMG2;
    player2.handskinleft = PLAYERIMG2HANDLEFT;
    player2.handskinright = PLAYERIMG2HANDRIGHT;
    apply.drawButton();
  }
  if(keuze == 3 && beurt == 2){
    fill(0,100)
    rect(520,200,200,200)
    fill(89, 255)
    textSize(50);
    textAlign(LEFT);
    text("Player 2 picked 3",40,550);
    player2.skin = PLAYERIMG3;
    player2.handskinleft = PLAYERIMG3HANDLEFT;
    player2.handskinright = PLAYERIMG3HANDRIGHT;
    apply.drawButton();
  }
  if(keuze == 4 && beurt == 2){
    fill(0,100)
    rect(760,200,200,200)
    fill(89, 255)
    textSize(50);
    textAlign(LEFT);
    text("Player 2 picked 4",40,550);
    player2.skin = PLAYERIMG4;
    player2.handskinleft = PLAYERIMG4HANDLEFT;
    player2.handskinright = PLAYERIMG4HANDRIGHT;
    apply.drawButton();
  }
  
}