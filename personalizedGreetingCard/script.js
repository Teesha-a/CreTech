const form = document.getElementById('cardForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const occasion = document.getElementById('occasion').value;

  // Store form data in localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('message', message);
  localStorage.setItem('occasion', occasion);

  // Redirect to greeting card page
  window.location.href = 'greetingCard.html';
});
