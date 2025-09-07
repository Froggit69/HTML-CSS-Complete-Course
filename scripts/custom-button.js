const button = document.getElementById('custom-button');

button.addEventListener('click', () => {
  button.classList.add('clicked');

  setTimeout(() => {
    button.classList.remove('clicked');
  }, 100);
});
