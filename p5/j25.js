let font
let fSize=800 // font size

let pts = [] // store path data
let jArray;
let r=0;
// let n=200;
var change=2;
var speed=2;
function preload() {
// setup()과 draw()를 호출하기에 앞서,
// assets 파일 경로에 .ttf 또는 .otf 폰트가 저장 및 로드되었는지 확인하세요. 
font = loadFont('../coolvetica rg.ttf');
}





function setup(){
    var c=createCanvas(1000,1000);
    background(255);
   

    textFont(font);
    textSize(fSize);
    // loop();
   
    jArray = font.textToPoints("J",width/2,height/2,fSize,{
        sampleFactor :0.2
        // print();
    })
    
    
}

function draw(){
    fill(255,50)
    // stroke(0)
 
    strokeWeight(1)
    // text("J",width/2-250,height/2+250);
push();
    for (var i = 0; i < jArray.length; i++) {
      jArray[i].x=jArray[i].x+ random(+change,+change) *speed
      jArray[i].y=jArray[i].y+ random(-change,change) *speed
      }
    
      strokeWeight(1);

     
  
   
        stroke(255,0,100,200); 
       

      beginShape();
      for (var i = 0; i < jArray.length; i++) {
        vertex(jArray[i].x-250, jArray[i].y+250);
       
       
        // rect(jArray[i].x-250, jArray[i].y+250, random(10),random(100));
        
      }
        // vertex(jArray[0].x-250, jArray[0].y+250);

      endShape();
  
pop();
       
     
}







function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/22")












