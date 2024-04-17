// Windy Day Asgn Start

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let cloudImg = document.getElementById("cloud");

//Clouds

let cloud1x = 130;
let cloud1y = 120;
let cloud2x = 170;

//Sun

let y = 300;
let r = 15;
let circleGreen = 0;

// Animation Loop
requestAnimationFrame(animate);

function animate() {
  if (y < 325) {
    y--;
  }

  if (r < 50) {
    r++;
  }

  if (circleGreen <= 255) {
    circleGreen++;
  }
  // UPDATE
  // Animate cloud 1
  cloud1x--; // Move left
  cloud2x++; // Move right

  // DRAW
  // Blue Background
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw Sun

  ctx.fillStyle = "rgb(255, " + circleGreen + ", 0)"; //yellow: 255, 255, 0
  ctx.beginPath();
  ctx.arc(200, y, r, 0, 2 * Math.PI);
  ctx.fill();

  // Green Grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, 400, 100);

  // Draw Clouds
  ctx.drawImage(cloudImg, cloud1x, cloud1y); // Cloud 1
  ctx.drawImage(cloudImg, cloud2x, 100); // Cloud 2

  // LOOP
  requestAnimationFrame(animate);
}
