function bowlBall() {
  ball.transition().attr('cy', 0).duration(2000);
  knockPins();
};
ball.on('click', bowlBall);
