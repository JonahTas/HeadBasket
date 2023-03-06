function Maingame() {
  if (pause == false) {
    background(100);

    player1.update();
    player2.update();
    
    
    balls[balls.length - 1].x = player1.x;
    balls[balls.length - 1].y = player1.y;
    balls[balls.length - 2].x = player2.x;
    balls[balls.length - 2].y = player2.y;

    balls.forEach(ball => {
      if (ball != balls[balls.length - 1] && ball != balls[balls.length - 2]) {
        ball.collide();
        ball.move();
      }
    });

    balls.forEach(ball => {
      ball.display();
      fill(0, 255, 0);
    });
  }
  if (pause == true) {

  }
}