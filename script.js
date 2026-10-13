let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let ampmEl = document.getElementById("ampm");

function updateTime(){
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = h >= 12 ? "PM" : "AM"; 
    
    h = h % 12;
    h =  h ? h : 12;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
}
setInterval(updateTime, 1000);
updateTime()