function removeDropper() {
  dropper.remove();
};
function cure() {
  bacteria.remove();
};
dropper.on('click', removeDropper);
bacteria.on('click', cure);
