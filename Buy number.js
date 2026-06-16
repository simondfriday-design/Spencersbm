<!DOCTYPE html>
<html>
<head><title>Virtual Numbers</title></head>
<body>
<h1>Buy Virtual Number</h1>
<button id="buyBtn">Buy Number</button>
<p id="result"></p>

<script>
document.getElementById('buyBtn').onclick = async function() {
  try {
    const res = await fetch('/.netlify/functions/buy-number', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service: 'whatsapp', country: 'US' })
    });
    const data = await res.json();
    document.getElementById('result').innerText = 'Number: ' + data.number;
  } catch(err) {
    document.getElementById('result').innerText = 'Error: ' + err.message;
  }
};
</script>
</body>
</html>
