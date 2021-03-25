let font
let fSize=800 // font size

let pts = [] // store path data
let jArray;
let r=0;
// let n=200;
var change=2;
var speed=1.5;
function preload() {

font = loadFont('../coolvetica rg.ttf');
}





function setup(){
    var c=createCanvas(1000,1000);
    background(255);
    frameRate(30)
      createLoop({duration:3, gif:true})

    textFont(font);
    textSize(fSize);
    // loop();
   
    jArray = font.textToPoints("J",width/2,height/2,fSize,{
        sampleFactor :20
        // print();


        
    })
    
    
}

function draw(){
    // fill(0,0)
    // // stroke(255,100,0,200)
 
    strokeWeight(1)
    // text("J",width/2-250,height/2+250);
push();

    for (var i = 0; i < jArray.length; i++) {
        jArray[i].x=jArray[i].x+ random(-change,+change) *speed
        jArray[i].y=jArray[i].y+ random(-change,change) *speed
      }
    
      strokeWeight(0.2);

     
      
      noFill(0,20);
     
       

      beginShape();
      for (var i = 0; i < jArray.length; i++) {
        stroke(100,20,200,20+i)
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



console.log("3/24")












