const toggleButton = document.getElementById('dark-mode-toggle');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-mode');

  // Optional: Store user preference in local storage (for persistence)
  if (bodyElement.classList.contains('dark-mode')) {
    localStorage.setItem('prefersDarkMode', 'true');
  } else {
    localStorage.removeItem('prefersDarkMode');
  }
});

// Optional: Check for user preference on page load and apply accordingly
if (localStorage.getItem('prefersDarkMode') === 'true') {
  bodyElement.classList.add('dark-mode');
}
