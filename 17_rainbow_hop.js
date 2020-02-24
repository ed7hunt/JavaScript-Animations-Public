var location = 0;
function drawSquare(color, ) {
  svg.append('rect').transition().delay(17 * location).attr('width', 30).attr('height', 30).attr('x', location).attr('y', 50).attr('fill', color);
  jump();
  location = location + 30;
};
drawSquare('red');
drawSquare('orange');
drawSquare('yellow');
drawSquare('green');
drawSquare('blue');
drawSquare('indigo');
drawSquare('violet');
