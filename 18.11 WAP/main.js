const cups = document.getElementsByClassName("cup");
const wrapper = document.getElementById("wrapper");
const ball = document.getElementById("ball");
const button = document.getElementById("btn");


[...cups].forEach((cup) => {
    cup.onclick = () => {
        if (!cup.classList.contains("active-cup")) {
            cup.classList.add("active-cup");
        } else {
            cup.classList.remove("active-cup");
        }
    }
    
});

button.onclick = () => {
    document.getElementById("ball").style.left = "30%";
};




