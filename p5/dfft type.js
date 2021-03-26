let font
let fSize=800 // font size

let pts = [] // store path data
let jArray;
let r=0;
// let n=200;
var change=1;
var speed=0.1;
function preload() {

font = loadFont('../assets/Lexend/Lexend-Thin.ttf');
}





function setup(){
    var c=createCanvas(1000,1000);
    background(255);
   

    textFont(font);
    textSize(fSize);
    // loop();
   
    jArray = font.textToPoints("J",width/2,height/2,fSize,{
        sampleFactor :0.02
        // print();
    })
    
    
}

function draw(){
   
    noStroke(255,0,50,100)
 
    // text("J",width/2-250,height/2+250);
push();

    for (var i = 0; i < jArray.length; i++) {
        jArray[i].x=jArray[i].x+ random(-change,+change) *speed
        jArray[i].y=jArray[i].y+ random(-change,change) *speed
      }
    
      strokeWeight(1);

     
      
    
     
       

      beginShape();
      for (var i = 0; i < jArray.length; i++) {
        // stroke(100,20,200,20+i)
        // vertex(jArray[i].x-250, jArray[i].y+250);
       
        fill(255,0+i*2,100,i/2)
        circle(jArray[i].x-250, jArray[i].y+300, 100);
        
      }
        

      endShape();
  
pop();
       
     
}







function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/21")












