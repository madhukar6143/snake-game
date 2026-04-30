const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID;
const PORT = process.env.PORT || 3000;

// GET high score
app.get('/highscore', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`,
      { headers: { 'X-Master-Key': JSONBIN_API_KEY } }
    );
    res.json({ highScore: response.data.record.highScore || 0 });
  } catch (e) {
    res.json({ highScore: 0 });
  }
});

// POST update high score
app.post('/highscore', async (req, res) => {
  try {
    const { score } = req.body;
    // Only update if new score is higher
    const current = await axios.get(
      `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`,
      { headers: { 'X-Master-Key': JSONBIN_API_KEY } }
    );
    const currentHigh = current.data.record.highScore || 0;
    if (score > currentHigh) {
      await axios.put(
        `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`,
        { highScore: score },
        { headers: { 'X-Master-Key': JSONBIN_API_KEY, 'Content-Type': 'application/json' } }
      );
      res.json({ success: true, newRecord: true, highScore: score });
    } else {
      res.json({ success: true, newRecord: false, highScore: currentHigh });
    }
  } catch (e) {
    res.json({ success: false });
  }
});

app.get('/', (req, res) => res.send('Snake High Score Server running!'));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
