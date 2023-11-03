# ai_chat_api for mayor_sim

## Overview

The `ai_chat_api` is a crucial component of the "mayor_sim" game. It facilitates communication between non-player characters (NPCs) and the game world, utilizing a Language Model (LLM) for natural language conversations.

## Features

- **NPC Chat**: The API enables NPCs in the "mayor_sim" game to engage in dynamic and context-aware conversations with players.

- **Language Model Integration**: It seamlessly integrates with a Language Model (LLM) to generate realistic and diverse NPC responses.

## Installation

To install and use the `ai_chat_api`, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/ai_chat_api.git
   ```

2. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Configure the API with your LLM credentials by editing the `config.json` file.

4. Start the API server:

   ```bash
   python app.py
   ```

## Usage

To utilize the API in your "mayor_sim" game, you can make HTTP requests to the API endpoints for NPC interactions. For example:

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

## Configuration

Make sure to configure the API by editing the `config.json` file with your specific LLM credentials and any other relevant settings.

```json
{
  "llm_api_key": "your_llm_api_key",
  "llm_endpoint": "https://your-llm-endpoint.com/api",
  "port": 5000
}
```

## Contributing

If you want to contribute to this project, please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out to tymonisat@gmail.com.

---

Happy gaming with "mayor_sim" and enjoy realistic NPC interactions with the `ai_chat_api`! 😄