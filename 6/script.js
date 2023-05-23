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
        // this.text = hitCounter;
        // c.clearRect(0, 0, window_width, window_height);

        if (this.x + this.r > window_width) {
            this.dx = -this.dx;
            // hitCounter++;
        }
        if (this.x - this.r < 0) {
            this.dx = -this.dx;
            // hitCounter++;
        }
        if (this.y - this.r < 0) {
            this.dy = -this.dy;
            // hitCounter++;
        }
        if (this.y + this.r > window_height) {
            this.dy = -this.dy;
            // hitCounter++;
        }

        this.draw(c);
        this.x += this.dx;
        this.y += this.dy;
    }
}

// let x_random = Math.random() * window_width;
// let y_random = Math.random() * window_height;

let getDistance = function (x1, y1, x2, y2) {
    var result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return result;
};

var allCircle = [];
let randomNumber = function (min, max) {
    var result = Math.random() * (max - min) - min;
    console.log(result);
    return result;
};
for (let i = 0; i < 10; i++) {
    var radius = 50;
    let x_random = randomNumber(radius, window_width - radius);
    let y_random = randomNumber(radius, window_height - radius);

    let sirkel = new Circle(x_random, y_random, radius, "black", "A", 20);
    // sirkel.draw();
    allCircle.push(sirkel);
}

// let sirkel1 = new Circle(500, 500, 50, "black", "A", 10);
// let sirkel2 = new Circle(300, 300, 200, "black", "B", 0);
// sirkel1.draw(c);
// sirkel2.draw(c);

function updateCircle() {
    requestAnimationFrame(updateCircle);
    c.clearRect(0, 0, window_width, window_height);
    allCircle.forEach((el) => {
        el.update();
    });
    // sirkel1.update();
    // sirkel2.update();

    // if (
    //     getDistance(sirkel1.x, sirkel1.y, sirkel2.x, sirkel2.y) <
    //     sirkel2.r + sirkel1.r
    // ) {
    //     sirkel2.color = "red";
    // }
    // if (
    //     getDistance(sirkel1.x, sirkel1.y, sirkel2.x, sirkel2.y) >=
    //     sirkel2.r + sirkel1.r
    // ) {
    //     sirkel2.color = "black";
    // }
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
