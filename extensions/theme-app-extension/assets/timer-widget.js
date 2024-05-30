document.addEventListener('DOMContentLoaded', async () => {
    const storeId = 'your-store-id'; // Replace with logic to get the store ID
    const response = await fetch(`/api/timers/${storeId}`);
    const timer = await response.json();
    const timerElement = document.createElement('div');
    timerElement.innerHTML = `
      <div>
        <p>${timer.description}</p>
        <p>Ends in: ${new Date(timer.endTime).toLocaleString()}</p>
      </div>
    `;
    document.body.appendChild(timerElement); // Adjust the position as needed
  });
  