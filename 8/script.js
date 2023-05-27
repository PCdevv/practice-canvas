let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
// console.log(canvas);
// console.log(c);

canvas.style.background = "salmon";

let window_width = window.innerWidth;
let window_height = window.innerHeight;

canvas.height = window_height;
canvas.width = window_width;

class Circle {
    constructor(xpos, ypos, r, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.r = r;
        this.color = color;
        // this.text = text;
        // this.speed = speed;
    }

    draw(c) {
        c.beginPath();
        c.arc(this.xpos, this.ypos, this.r, 0, Math.PI * 2, false);
        c.strokeStyle = "grey";
        c.lineWidth = 3;
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }

    changeColor(newColor) {
        this.color = newColor;
        this.draw(c);
    }

    clickCircle(xcursor, ycursor) {
        // console.log(xcursor + " | " + ycursor);
        const distance = Math.sqrt(
            (xcursor - this.xpos) * (xcursor - this.xpos) +
                (ycursor - this.ypos) * (ycursor - this.ypos)
        );
        if (distance < this.r) {
            this.changeColor("lightgreen");
            return true;
        } else {
            this.changeColor("red");
            return false;
        }
    }
}

let sirkel = new Circle(200, 200, 100, "red");
sirkel.draw(c);

canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sirkel.clickCircle(x, y);
    // console.log(sirkel.clickCircle(x, y));
});
