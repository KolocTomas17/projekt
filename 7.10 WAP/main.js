const co = document.getElementById("co");
const coInfo = document.getElementById("co-info");
const autoClicker = document.getElementById("auto-clicker");
let cookies = 0;

const clickEvent = () => {
    cookies++;
    coInfo.innerText = `Cookies: ${cookies}`;
}

co.onclick = clickEvent;

autoClicker.onclick = () => {
    if (cookies >= 100) {
        cookies -= 100;
        setInterval(() => {
            clickEvent();
        },0)
    }
}