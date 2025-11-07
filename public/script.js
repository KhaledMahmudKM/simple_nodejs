// Handle "Hello" button click
document.getElementById('helloBtn').addEventListener('click', () => {
  const msg = document.getElementById('helloMsg');
  msg.innerText = 'Hello from script.js!';
});

// Handle "Get Random Quote" button click
document.getElementById('getQuote').addEventListener('click', async () => {
  const response = await fetch('/api');
  const data = await response.json();
  document.getElementById('quote').innerText = data.quote;
});
