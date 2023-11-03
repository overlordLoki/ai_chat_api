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
