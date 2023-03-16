function Maingame() {
  if (pause == false) {
    background(100);
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
    balls[balls.length - 5].diameter = 50; //basket links radius
    balls[balls.length - 6].x = WIDTH -160; //basket rechts x
    balls[balls.length - 6].y = 180; //basket rechts y
    balls[balls.length - 6].diameter = 50; //basket rechts radius
    
    
    
    balls.forEach(ball => {
      if (ball != balls[balls.length - 1] && ball != balls[balls.length - 2] && ball != balls[balls.length - 3] && ball != balls[balls.length - 4] && ball != balls[balls.length - 5] && ball != balls[balls.length - 6]) {
        ball.collide();
        ball.move();
      }
    });

    balls.forEach(ball => {
      ball.display();
    });
    player1.display();
    player2.display();
//---------------------------------------------------------------// scores
if(balls[0].x >0 && balls[0].x <160 && balls[0].y <180){
  scoreP1 = scoreP1 +1;
}

if(balls[0].x >(WIDTH - 160) && balls[0].x <WIDTH && balls[0].y <180){
  scoreP2 = scoreP2 +1;
}
text(scoreP2,100,100)
text(scoreP1,900,100)

    
  }
  if (pause == true) {

  }
}
