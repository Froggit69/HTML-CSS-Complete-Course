const button = document.getElementById('custom-button'); // Find the button by its ID.

button.addEventListener('click', () => {
  // If the button is clicked.
  button.classList.add('clicked'); // Set the `clicked` class name.

  setTimeout(() => {
    button.classList.remove('clicked'); // Remove it after 100 miliseconds.
  }, 100);
});
