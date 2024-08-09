function time() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timeButton').innerText = currentTime;
}

document.addEventListener('DOMContentLoaded', (event) => {
    time();
    function updateTime() {
        time();
        requestAnimationFrame(updateTime);
      }
      
      document.addEventListener('DOMContentLoaded', () => {
        updateTime();
      });
});