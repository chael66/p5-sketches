let font
let fSize // font size
let msg // text to write
let pts = [] // store path data


function preload() {
// setup()과 draw()를 호출하기에 앞서,
// assets 파일 경로에 .ttf 또는 .otf 폰트가 저장 및 로드되었는지 확인하세요. 
font = loadFont('../ChunkFive-Regular.otf');
}





function setup(){
    var c=createCanvas(1000,1000);
    background(0);
    
    fSize=600; 
    msg = 'J'
    pts = font.textToPoints(msg, 0, 0, fSize, {
        sampleFactor: 0.1, // increase for more points
        simplifyThreshold: 0.0 // increase to remove collinear points
    })
  
    console.log(pts) // { x, y, path angle }

    stroke(0)
    strokeWeight(2)
   
}

function draw() {
  
    push()
    translate(350, 650)
    
    fill(255)
    stroke(0)
    beginShape()
  for (let i = 0; i < pts.length; i++) {
      const p = pts[i]
      vertex(p.x, p.y)
    }
    endShape()
    pop()
  }







// function mousePressed(){
//     saveCanvas("J-X","png")
// }



console.log("3/14")












