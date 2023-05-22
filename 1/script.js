let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.style.background = "salmon";
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

c.fillStyle = "black";
c.fillRect(0, 0, 100, 100);

c.beginPath();
c.strokeStyle = "black";
c.lineWidth = 10;
c.arc(100, 100, 50, 0, Math.PI * 2);
c.stroke();
c.closePath();
