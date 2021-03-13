let beginX = 200.0; // Initial x-coordinate
let beginY = 700.0; // Initial y-coordinate
let endX = 570.0; // Final x-coordinate
let endY = 100.0; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 10; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.001; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(1000,1000);
  background(0)

  noStroke();
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  fill(0, 0);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(255);
  ellipse(x, y, 20, 20);
}

function mousePressed() {
  pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
