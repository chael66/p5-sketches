let noiseScale=100;

let font
let fSize=800 // font size

let pts = [] // store path data
let jArray;
let r=0;
// let n=200;
var change=3;
var speed=0.8;
function preload() {

font = loadFont('../coolvetica rg.ttf');
}





function setup(){
    var c=createCanvas(1000,1000);
    background(255);
   

    textFont(font);
    textSize(fSize);
    // loop();
   
    jArray = font.textToPoints("J",width/2,height/2,fSize,{
        sampleFactor :0.08
        // print();
    })
    
    
}

function draw(){
    // fill(0,20)
    // stroke(255,0,50,100)
  
    // text("J",width/2-250,height/2+250);


    // for (var i = 0; i < jArray.length; i++) {
    //     jArray[i].x=jArray[i].x+ random(-change,+change) *speed
    //     jArray[i].y=jArray[i].y+ random(-change,change) *speed
    //   }
    
      strokeWeight(0.7);

     
      
    
     
       

      beginShape();
      for (var i = 0; i < jArray.length; i++) {
        // stroke(100,20,200,20+i)
        // vertex(jArray[i].x-250, jArray[i].y+250);
        for (let x=0; x < width; x++) {
            let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
            stroke(0);
            noFill(0)
            // vertex(jArray[i].x-250, jArray[i].y+250);
            vertex(jArray[i].x-250+noiseVal*100, jArray[i].y+noiseVal*200+90);
        }
        // rect(jArray[i].x-250, jArray[i].y+250, random(10),random(100));
        
      }
        // vertex(jArray[0].x-250, jArray[0].y+250);

      endShape();

     
}







function mousePressed(){
    saveCanvas("J-X","png")
}









console.log("3/25")












