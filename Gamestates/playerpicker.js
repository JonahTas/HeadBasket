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
  if(keuzeP1 == "undefined"){
    text("Player 1 is picking:",40,500);
  }
  if(keuzeP1 == 1){
    fill(0,100)
    rect(40,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 1 picked 1:",40,500);
  }
  if(keuzeP1 == 2){
    fill(0,100)
    rect(280,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 1 picked 2:",40,500);
  }
  if(keuzeP1 == 3){
    fill(0,100)
    rect(520,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 1 picked 3:",40,500);
  }
  if(keuzeP1 == 4){
    fill(0,100)
    rect(760,200,200,200)
    fill(255)
    textAlign(LEFT);
    text("Player 1 picked 4:",40,500);
  }

  
}