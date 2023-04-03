function Settings() {
background(0);
  
fill(255,255,255,255);
textAlign(CENTER, CENTER);
textSize(100);
text("Settings",500,90);

textSize(30);
sliderMusic.show();
valMusic = sliderMusic.value();
text(valMusic,500,280);
text("Music:",500,220);
  
sliderSound.show();
valSound = sliderSound.value();
text(valSound,500,430);
text("Soundeffects:",500,370);

back.drawButton();
  oldX = getItem('xpos');
  oldY = getItem('ypos');
  if (oldX != null && oldY != null)
    circle(oldX, oldY, 100);
    
}
//Local storage voorbeeld:
//https://editor.p5js.org/Nostrada/sketches/7euNfqufj