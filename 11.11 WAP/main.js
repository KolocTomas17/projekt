const cells = document.getElementsByClassName("cell");
const redDiv = document.getElementById("redDiv");
const blueDiv = document.getElementById("blueDiv");
const greenDiv = document.getElementById("greenDiv");
const whiteDiv = document.getElementById("whiteDiv")
const colorCells = document.getElementsByClassName("color-cell");

let color = "white";

redDiv.onclick = () => {
    color = "red";
    clearDiv();
    redDiv.classList.add("active");

};
greenDiv.onclick = () => {
    color = "green";
    clearDiv();
    greenDiv.classList.add("active");
};
 
blueDiv.onclick = () => {
    color = "blue";
    clearDiv();
    blueDiv.classList.add("active");
};

whiteDiv.onclick = () => {
    color = "white";
    clearDiv();
    whiteDiv.classList.add("active");
};

const clearDiv = () => {
    [...colorCells].forEach((cell) => {
        cell.classList.remove("active");
    })
}



[...cells].forEach((cell) => {
    cell.onclick = () => cell.style.backgroundColor = color;
});