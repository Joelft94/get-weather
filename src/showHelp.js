export const showHelp = () => {
  console.log(`
  CLI Weather Application
  
  Usage:
    node weather.js [city] [country]
  
  Examples:
    node weather.js "Los Angeles" "US"
    node weather.js "Buenos Aires" "AR"
  
  Options:
    --help       Show help information
    `);
};
