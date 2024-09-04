# Define default values
DEFAULT_CITY="Asuncion"
DEFAULT_COUNTRY="PY"
API_KEY_ENV_FILE=".env"

# Check if .env file exists and contains API key
if [ ! -f "$API_KEY_ENV_FILE" ]; then
  echo "Error: .env file not found. Please create a .env file with your API key."
  exit 1
fi

# Install dependencies
echo "Installing dependencies..."
# npm install

# Run a default weather fetch
echo "Fetching weather for $DEFAULT_CITY, $DEFAULT_COUNTRY..."
node weather.js "$DEFAULT_CITY" "$DEFAULT_COUNTRY"

# Run tests (need a test script in package.json)
echo "Running tests..."
# npm test

echo "Script completed."
