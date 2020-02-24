circle.attr('fill', pickRandom(color));
function changeColor(___) {
  circle.attr('fill', pickRandom(color));
  ___
};
circle.on('click', changeColor);
