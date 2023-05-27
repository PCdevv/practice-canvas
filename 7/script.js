let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.style.background = "salmon";

let window_width = window.innerWidth;
let window_height = window.innerHeight;

canvas.height = window_height;
canvas.width = window_width;

class Image {
    constructor(imagePath, xpos, ypos, width, height) {
        this.imagePath = imagePath;
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
    }
}

function createImage(c, imagePath, xpos, ypos, width, height) {
    let myImage = document.createElement("img");
    myImage.src = imagePath;
    myImage.onload = function () {
        c.drawImage(myImage, xpos, ypos, width, height);
    };
}

let image = new Image("smk.png", 100, 50, 300, 300);
createImage(
    c,
    image.imagePath,
    image.xpos,
    image.ypos,
    image.width,
    image.height
);
