

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);

    const munites = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeStarting = `${hours}: ${munites}: ${seconds} ${meridiem}`;

    document.getElementById('clock').textContent = timeStarting;
}

updateClock();
setInterval(updateClock, 1000);

console.log('kjfkd')