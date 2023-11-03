
# ai_chat_api for mayor_sim

## Overview

The `ai_chat_api` is a vital component of the "mayor_sim" game. It provides an API for generating responses to prompts using the Loki service, which is integral to the game's functionality.

## JavaScript Code (index.js)

The following JavaScript code in `index.js` sets up an Express server that listens for POST requests to generate responses based on provided prompts.

```javascript
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  date = new Date();
  console.log('Request received at: ', date.getHours(), ':', date.getMinutes(), ':', date.getSeconds());
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
```

## Python Code (test.py)

The following Python code in `test.py` demonstrates how to send a POST request to the Loki API using the `requests` library, providing a prompt and receiving a response.

```python
import requests

# Define the URL to send a POST request to
url = 'https://game.overlord-loki.com/generate'

# Define the headers for the request
headers = {'Content-Type': 'application/json'}

# Define the prompt that will be sent as JSON data
prompt = 'In order to make homemade bread, follow these steps:\n1)'

# Create a dictionary with the prompt
data = {'prompt': prompt}

# Send a POST request to the specified URL with JSON data and headers
response = requests.post(url, json=data, headers=headers)

# Check if the response status code is 200 (OK)
if response.status_code == 200:
    # If the response is successful, parse the JSON content
    result = response.json()
    # Print the result
    print(result)
else:
    # If the response is not successful, print an error message with the status code
    print(f'Request failed with status code {response.status_code}')
```


## Usage

You can utilize the `ai_chat_api` for generating responses to prompts in your "mayor_sim" game by sending HTTP POST requests to the provided endpoints, as demonstrated in `test.py`.



## Contact

For any questions or feedback, feel free to reach out to [your email address].

---

Enjoy using the `ai_chat_api` in your "mayor_sim" game and enhancing the gaming experience with AI-powered responses!