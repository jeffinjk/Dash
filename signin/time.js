function time() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timeButton').innerText = currentTime;
}

document.addEventListener('DOMContentLoaded', (event) => {
    time(); // Call the time() function to set the initial time for the button
    setInterval(time, 1000); // Update the time every second
});