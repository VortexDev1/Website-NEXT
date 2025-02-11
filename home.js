// Search functionality
const searchInput = document.getElementById('search-input');
const modCards = document.querySelectorAll('.mod-card');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  modCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});