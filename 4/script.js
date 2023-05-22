let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.style.background = "salmon";

let window_width = window.innerWidth;
let window_height = window.innerHeight;

canvas.height = window_height;
canvas.width = window_width;

let hitCounter = 0;

class Circle {
  constructor(x, y, r, color, text, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.text = text;
    this.speed = speed;

    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
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

  update() {
    this.text = hitCounter;
    c.clearRect(0, 0, window_width, window_height);

    if (this.x + this.r > window_width) {
      this.dx = -this.dx;
      hitCounter++;
    }
    if (this.x - this.r < 0) {
      this.dx = -this.dx;
      hitCounter++;
    }
    if (this.y - this.r < 0) {
      this.dy = -this.dy;
      hitCounter++;
    }
    if (this.y + this.r > window_height) {
      this.dy = -this.dy;
      hitCounter++;
    }

    this.draw(c);
    this.x += this.dx;
    this.y += this.dy;
  }
}

// let x_random = Math.random() * window_width;
// let y_random = Math.random() * window_height;

let sirkel = new Circle(100, 100, 50, "black", hitCounter, 10);
sirkel.draw(c);

function updateCircle() {
  requestAnimationFrame(updateCircle);
  sirkel.update();
}

updateCircle();

// function createCircle(circle) {
//   circle.draw(c);
// }

// let allC = [];
// for (let i = 0; i < 100; i++) {
//   let x_random = Math.random() * window_width;
//   let y_random = Math.random() * window_height;

//   let sirkel = new Circle(x_random, y_random, 50, "black", circleCounter);
//   allC.push(sirkel);
//   circleCounter++;
//   createCircle(allC[i]);
// }
