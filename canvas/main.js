const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");


//tělo
ctx.fillStyle = "black";
ctx.fillRect(500, 300, 15, 10);

ctx.arc(504, 308, 20, 0, 2 * Math.PI);
ctx.fillRect(489.705, 315, 41, 150);

//hlava
ctx.beginPath();
ctx.arc(505, 260, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#e6b485";
ctx.lineWidth = 1;
ctx.fill();
ctx.stroke();


//klobouk
ctx.beginPath();

ctx.fillStyle = "black";
ctx.arc(504, 220, 27, 0, Math.PI, true);
ctx.fillRect(465, 219, 80, 12);
ctx.fill();

//nohy
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(500, 450);
ctx.lineTo(490, 510);
ctx.moveTo(520, 450);
ctx.lineTo(530, 510);
ctx.lineWidth = 5,5;
ctx.stroke();


//oči
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(490, 250, 4, 0, 2 * Math.PI);
ctx.arc(520, 250, 4, 0, 2 * Math.PI);
ctx.fill();


//pusa
ctx.beginPath();
ctx.fillStyle = "#8f1d28";
ctx.arc(505, 280, 10, 0, 1 * Math.PI);
ctx.fill();



//ramena
ctx.beginPath();
ctx.arc(510, 323, 21, 0, 2* Math.PI);
ctx.fillStyle = "black";
ctx.lineWidth = 1;
ctx.fill();

//ruce
ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(500, 330);
ctx.lineTo(595, 340);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(500, 380);
ctx.lineTo(595, 345);
ctx.stroke();


//pistol
ctx.beginPath();
ctx.fillRect(590, 335, 5, 25);
ctx.fillRect(585, 335, 40, 6.5);
ctx.arc(680, 338, 2.2, 0, 2 * Math.PI);
ctx.fill();