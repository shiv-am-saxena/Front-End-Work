const select = document.getElementById('color-select');
// const nxtDoor = document.querySelector('.nxt-door');
select.addEventListener('change', (event) => {
  const color = event.target.value;
  // document.body.style.backgroundColor = color;
  document.getElementById('dynamic-color').style.stroke = color;
  document.getElementById('dynamic-color').style.fill = color;
  document.getElementById('color-select').style.color = color;
  document.getElementById('hire').style.color = color;
  document.getElementById('name-color').style.color = color;
  document.getElementById('hire').style.borderColor = color;
  document.getElementById('nav-bottom').style.borderBottomColor = color;
  
});
const toggleSwitch = document.getElementById('theme-toggle');

toggleSwitch.addEventListener('change', (event) => {
  if (event.target.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});
