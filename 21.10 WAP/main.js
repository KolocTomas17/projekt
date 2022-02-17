const myDiv = document.getElementsByClassName("myDiv");
const done = document.getElementById("done");

let counter = 0;

const change = () => {
    let element = event.target;
    if (!element.style.backgroundColor) {
        counter++;
        element.style.backgroundColor = "green";
    }
    if (counter == myDiv.length) {
        done.innerText = "DONE";
    }
}

[...myDiv].forEach((div) => {
    div.onclick = change;
})