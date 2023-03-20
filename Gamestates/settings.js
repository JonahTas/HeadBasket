function Settings() {
background(0);
  
fill(255,255,255,255);
textAlign(CENTER, CENTER);
textSize(100);
text("Settings",500,90);

textSize(30);
sliderMusic.show();
let valMusic = sliderMusic.value();
text(valMusic,500,280);
text("Music:",500,220);
  
sliderSound.show();
let valSound = sliderSound.value();
text(valSound,500,430);
text("Sound:",500,370);

settingsback.drawButton();
  
}