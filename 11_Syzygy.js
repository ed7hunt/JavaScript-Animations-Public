function moveCircles() {
  circles.transition().attr('cx', 55).transition().attr('cy', 55).transition().attr('r', 35);
};
circles.on('click', moveCircles);
