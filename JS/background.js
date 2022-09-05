const image = ["1.jpg", "2.jpg", "3.jpg"];

const BG = "background";

const chosenImage = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");
bgImage.className = BG;

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
