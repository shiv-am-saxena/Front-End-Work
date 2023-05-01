const button = document.querySelector('button');

button.addEventListener('mouseenter', () => {
  button.classList.add('is-hovered');
});

button.addEventListener('mouseleave', () => {
  button.classList.remove('is-hovered');
});

