let font;
function preload() {
  font = loadFont('coolvetica rg.ttf');
}
let points;
let bounds;

function setup() {
  createCanvas(1000, 1000);
  noStroke(0);

  points = font.textToPoints('J', 2, -0.5, 10, {
    sampleFactor: 100,
    simplifyThreshold: 0
  });
  bounds = font.textBounds(' J ', 0, 0, 0);
}

function draw() {
  background(255);
  // fill(0)
  // circle(60,100,50)

  beginShape();
  translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  for (let i = 0; i < points.length; i++) {
    fill(120, 200, 200,255);
    let p = points[i];
    vertex(
      p.x * width / bounds.h +
        sin(100 * p.y / bounds.h + millis() / 100) * width / 100,
      p.y * height / bounds.h
    );
  }
  
  // fill(0);


endShape(CLOSE);
for(a=0; a<1000; a++){
  fill(255)
circle(250,-900+a,5)
circle(270,-900+a,5)
circle(290,-900+a,5)
circle(310,-900+a,5)
circle(330,-900+a,5)
circle(350,-900+a,5)
circle(370,-900+a,5)
circle(390,-900+a,5)
circle(410,-900+a,5)
circle(430,-900+a,5)
circle(450,-900+a,5)
circle(470,-900+a,5)
circle(490,-900+a,5)
circle(510,-900+a,5)
circle(530,-900+a,5)
circle(550,-900+a,5)
circle(570,-900+a,5)
circle(590,-900+a,5)
circle(610,-900+a,5)
circle(630,-900+a,5)
circle(650,-900+a,5)
circle(670,-900+a,5)
circle(690,-900+a,5)
circle(710,-900+a,5)
circle(730,-900+a,5)
circle(750,-900+a,5)
circle(770,-900+a,5)
// circle(790,-900+a,5)




}

}
function mousePressed(){
    saveCanvas("J-X","png")
}