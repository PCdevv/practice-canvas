let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.style.background = "salmon";

let window_width = window.innerWidth;
let window_height = window.innerHeight;

canvas.height = window_height;
canvas.width = window_width;

class Circle {
  constructor(x, y, r, color, text) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.text = text;
  }

  draw(c) {
    c.beginPath();

    c.strokeStyle = this.color;
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.font = "20px Arial";
    c.fillText(this.text, this.x, this.y);
    // c.strokeText(this.text, this.x, this.y);

    c.lineWidth = 5;
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.stroke();
    c.closePath();
  }
}

let circleCounter = 1;

let allC = [];

function createCircle(circle) {
  circle.draw(c);
}

for (let i = 0; i < 10; i++) {
  let x_random = Math.random() * window_width;
  let y_random = Math.random() * window_height;

  let sirkel = new Circle(x_random, y_random, 50, "black", circleCounter);
  allC.push(sirkel);
  circleCounter++;
  createCircle(allC[i]);
}

// c.fillStyle = "black";
// c.fillRect(0, 0, 100, 100);

// c.beginPath();
// c.strokeStyle = "black";
// c.lineWidth = 10;
// c.arc(100, 100, 50, 0, Math.PI * 2);
// c.stroke();
// c.closePath();
