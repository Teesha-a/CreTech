const form = document.getElementById('cardForm');
const card = document.getElementById('card');
const downloadBtn = document.getElementById('downloadBtn');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const occasion = document.getElementById('occasion').value;

  // Update the card with the personalized details
  document.getElementById('cardName').textContent = `– From ${name}`;
  document.getElementById('cardMessage').textContent = message;
  document.getElementById('cardOccasion').textContent = `Happy ${occasion}!`;

  // Show the generated card
  card.style.display = 'block';
  downloadBtn.style.display = 'inline-block';
});

downloadBtn.addEventListener('click', function() {
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'greeting_card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
