const themeSelector = document.getElementById('theme-selector');
const themeSelectorRibbon = document.getElementById('theme-selector-ribbon');

themeSelector.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  
  // Set the new color theme
  switch (selectedTheme) {
    case 'theme1':
      document.documentElement.style.setProperty('--primary-color', '#FFB6C1');
      break;
    case 'theme2':
      document.documentElement.style.setProperty('--primary-color', '#87CEEB');
      break;
    case 'theme3':
      document.documentElement.style.setProperty('--primary-color', '#90EE90');
      break;
    case 'theme4':
      document.documentElement.style.setProperty('--primary-color', '#FFD700');
      break;
  }
});

// Show/hide the color theme selector ribbon
themeSelectorRibbon.addEventListener('click', () => {
  themeSelector.classList.toggle('open');
});
