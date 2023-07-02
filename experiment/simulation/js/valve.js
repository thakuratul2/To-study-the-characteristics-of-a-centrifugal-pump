const light = document.getElementById('led-yellow');
const btn = document.getElementsByClassName('valve');


btn.addEventListener('click', function() {
  // Toggle the class of the light element
  light.classList.toggle('led-yellow');
  light.classList.toggle('off');
});