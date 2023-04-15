function Eindscore() {
image(EINDSCOREBACKGROUND, 0, 0, WIDTH, HEIGHT);

Menu.drawButton();

  
  if (scoreP1 < scoreP2) {
    text("Player 1 won!",500,90); //wnr speler 1 wint
  }
  
  if (scoreP1 > scoreP2) {
    text("Player 2 won",500,90); // wnr speler 2 wint
  } 
  if (scoreP1 == scoreP2) {
    text("It is a tie", 500,90);
  }

}
