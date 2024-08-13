function time() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timebutton').innerText = currentTime;
}

document.addEventListener('DOMContentLoaded', (event) => {
    time();
    setInterval(time, 1000); 
});