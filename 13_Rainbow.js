var firstCircle = d3.select('circle');
function turnToGold() {
  firstCircle.transition().attr('fill', 'gold');
};
firstCircle.on('click', turnToGold);
