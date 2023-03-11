function Maingame() {
  if (pause == false) {
    background(100);
//console.log(player1.handx);
    player1.update();
    player2.update();
    
    
    balls[balls.length - 1].x = player1.x;
    balls[balls.length - 1].y = player1.y;
    balls[balls.length - 2].x = player2.x;
    balls[balls.length - 2].y = player2.y;
    balls[balls.length - 3].x = player1.handx;
    balls[balls.length - 3].y = player1.handy;
    balls[balls.length - 4].x = player2.handx;
    balls[balls.length - 4].y = player2.handy;
    
    balls.forEach(ball => {
      if (ball != balls[balls.length - 1] && ball != balls[balls.length - 2] && ball != balls[balls.length - 3] && ball != balls[balls.length - 4]) {
        ball.collide();
        ball.move();
      }
    });

    balls.forEach(ball => {
      ball.display();
    });
    player1.display();
    player2.display();
  }
  if (pause == true) {

  }
}