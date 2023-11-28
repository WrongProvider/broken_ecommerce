// JavaScript to show/hide the options container
const originalSelect = document.getElementById('original-select');
const optionsContainer = document.getElementById('options-container');

originalSelect.addEventListener('click', function() {
  optionsContainer.style.display = 'block';
});

document.addEventListener('click', function(e) {
  if (e.target !== originalSelect && !optionsContainer.contains(e.target)) {
    optionsContainer.style.display = 'none';
  }
});