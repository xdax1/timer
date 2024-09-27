const express = require('express');
const app = express();

// Funkcja obliczająca różnicę czasu
function timeUntil(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
}

// Ustaw datę docelową - 15 listopada 2024
const targetDate = new Date('2024-11-15T00:00:00');

app.get('/countdown', (req, res) => {
  const { days, hours, minutes } = timeUntil(targetDate);
  res.json({ message: `${days} dni, ${hours} godzin, ${minutes} minut do 15 listopada!` });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
