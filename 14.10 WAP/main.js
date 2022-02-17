const myDiv = document.getElementsByClassName("myDiv");

[...myDiv].forEach((div) => {
    div.onclick = () => {
        div.style.backgroundColor = "green";
        if (div.innerText === "click") return div.innerText = "clicked";
        div.innerText = "click";
    }
});








