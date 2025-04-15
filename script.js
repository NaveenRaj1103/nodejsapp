const quoteText = document.getElementById('quote-text');
const toggle = document.getElementById('mode-toggle');

function getQuote() {
  fetch('/quote')
    .then(res => res.json())
    .then(data => {
      quoteText.textContent = data.text;
    });
}

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

getQuote(); // Load first quote on page load
