var rectangles = d3.selectAll('rect');
function hideRectangles() {
  rectangles.transition().attr('r', 0).attr('height', 0).attr('width', 0);
};
rectangles.on('click', hideRectangles);
