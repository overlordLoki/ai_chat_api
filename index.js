const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const geoip = require('geoip-lite');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  date = new Date();
  console.log('Request received at: ', date.getHours(), ':', date.getMinutes(), ':', date.getSeconds());
  //const ip = req.headers['x-forwarded-for'] || req.remoteAddress;
  start = new Date().getTime();
  try {
    const response = await axios.post('https://api.overlord-loki.com/api/v1/generate', {
      prompt,
      max_new_tokens: 500,
      auto_max_new_tokens: false,
      // Add other request parameters here as needed
    });

    if (response.status === 200) {
      const result = response.data.results[0].text;
      res.json({ result });
    } else {
      res.status(response.status).json({ error: 'Request to the Loki API failed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
  console.log('Time taken: ', new Date().getTime() - start);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
