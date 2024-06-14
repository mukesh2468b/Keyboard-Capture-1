async function fetchLogs() {
  try {
    const response = await fetch('/logs');
    const logs = await response.text();
    document.getElementById('log').innerText = logs;
  } catch (error) {
    console.error('Error fetching logs:', error);
  }
}

// Fetch logs initially when the page loads
window.onload = fetchLogs;
