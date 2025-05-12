window.onload = () => {
  // Get data from localStorage
  const name = localStorage.getItem('name');
  const message = localStorage.getItem('message');
  const occasion = localStorage.getItem('occasion');

  // Update the card with the personalized details
  document.getElementById('cardName').textContent = `– From ${name}`;
  document.getElementById('cardMessage').textContent = message;
  document.getElementById('cardOccasion').textContent = `Happy ${occasion}!`;

  // Show the download button
  document.getElementById('downloadBtn').addEventListener('click', function() {
    html2canvas(document.querySelector(".card")).then(canvas => {
      const link = document.createElement('a');
      link.download = 'greeting_card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  });
}
