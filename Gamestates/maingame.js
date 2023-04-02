function Maingame() {
    background(100);
    maingamemusic.loop();
    player1.update();
    player2.update();
    
    balls[balls.length - 1].x = player1.x; //player 1 x
    balls[balls.length - 1].y = player1.y; //player 1 y
    balls[balls.length - 2].x = player2.x; //player 2 x
    balls[balls.length - 2].y = player2.y; //player 2 y
    balls[balls.length - 3].x = player1.handx; //player 1 handx
    balls[balls.length - 3].y = player1.handy; //player 1 handy
    balls[balls.length - 3].diameter = 40; //player 1 handradius
    balls[balls.length - 4].x = player2.handx; //player 2 handx
    balls[balls.length - 4].y = player2.handy; //player 2 handy
    balls[balls.length - 4].diameter = 40; //player 2 handradius
    balls[balls.length - 5].x = 160; //basket links x
    balls[balls.length - 5].y = 180; //basket links y
    balls[balls.length - 5].diameter = 50; //basket links diameter
    balls[balls.length - 6].x = WIDTH -160; //basket rechts x
    balls[balls.length - 6].y = 180; //basket rechts y
    balls[balls.length - 6].diameter = 50; //basket rechts diameter
    
    
    balls.forEach(ball => {
      if (ball != balls[balls.length - 1] && ball != balls[balls.length - 2] && ball != balls[balls.length - 3] && ball != balls[balls.length - 4] && ball != balls[balls.length - 5] && ball != balls[balls.length - 6]) {
        ball.collide();
        ball.move();
      }
    });

    balls.forEach(ball => {
      if(ball != balls[balls.length - 1] && ball != balls[balls.length - 2])
      {
      ball.display();
      }
    });
    player1.display();
    player2.display();
//---------------------------------------------------------------//
      
if(balls[0].x >0 && balls[0].x <160 && balls[0].y < 180 + playerR && balls[0].y > 180 - playerR && balls[0].vy >0 && canScore == true){
  countedP1 = true;
}// detecteerd de bal in het net met een positieve verticale beweging
if(balls[0].x >(WIDTH - 160) && balls[0].x <WIDTH && balls[0].y < 180 + playerR && balls[0].y > 180 - playerR && balls[0].vy >0 && canScore == true){
  countedP2 = true;
}// detecteerd de bal in het net met een positieve verticale beweging
if(balls[0].x >0 && balls[0].x <160 && balls[0].y < 180 + playerR && balls[0].y > 180 - playerR && balls[0].vy <0){
  canScore = false;
  penaltyTimer = 2;
}// detecteerd de bal in het net met een negatieve verticale beweging
if(balls[0].x >(WIDTH - 160) && balls[0].x <WIDTH && balls[0].y < 180 + playerR && balls[0].y > 180 - playerR && balls[0].vy <0){
  canScore = false;
  penaltyTimer = 2;
}// detecteerd de bal in het net met een negatieve verticale beweging
if(!(balls[0].x >0 && balls[0].x <160 && balls[0].y < 180 + playerR && balls[0].y > 180 - playerR) && countedP1 == true){
  scoreP1 ++;
  countedP1 = false;
}// punt links
if(!(balls[0].x >(WIDTH - 160) && balls[0].x <WIDTH && balls[0].y < 180 + playerR && balls[0].y > 180 - playerR) && countedP2 == true){
  scoreP2 ++;
  countedP2 = false;
}// punt rechts
if(canScore == false && frameCount % 60 == 0 && penaltyTimer > 0) {
    penaltyTimer = penaltyTimer - 1;
}// laat de timer afspelen bij penalty
if(penaltyTimer == 0){
  canScore = true;
  penaltyTimer = 2;
}// maakt penalty ongedaan
  
textSize(50);
textAlign(CENTER,CENTER);
fill(255);
text(scoreP2,250,100);
text(scoreP1,750,100);
text(penaltyTimer,500,250);
// print scores
  
pause.drawButton();
}
