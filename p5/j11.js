let font
let fSize=600 // font size
let msg // text to write
let pts = [] // store path data
let jArray;

function preload() {
// setup()과 draw()를 호출하기에 앞서,
// assets 파일 경로에 .ttf 또는 .otf 폰트가 저장 및 로드되었는지 확인하세요. 
font = loadFont('../ChunkFive-Regular.otf');
}





function setup(){
    var c=createCanvas(1000,1000);
    background(255);
    textFont(font);
    textSize(fSize);
   
    jArray = font.textToPoints("J",width/2,height/2,fSize,{
        sampleFactor :0.02
    })
    
    stroke(0)
    strokeWeight(3)
    noFill();
    
   


    
   
}

function draw(){
    fill(18,100)
    text("",width/2,height/2);
    for(let i=0; i<jArray.length;i++){
        
        rect(jArray[i].x,jArray[i].y,20,20);
        
        // translate(jArray[i].x,jArray[i].y);
  
    }
fill(10,1)
noStroke()
    for(let i=0; i<jArray.length;i++){
        
        rect(jArray[i].x-5,jArray[i].y-5,20,20);
        rect(jArray[i].x-10,jArray[i].y-10,20,20);
        rect(jArray[i].x-15,jArray[i].y-15,20,20);

        rect(jArray[i].x-10,jArray[i].y-10,20,20);
        rect(jArray[i].x-10,jArray[i].y-10,20,20);
        rect(jArray[i].x-10,jArray[i].y-10,20,20);
        rect(jArray[i].x-10,jArray[i].y-10,20,20);
                // translate(jArray[i].x,jArray[i].y);
  
    }

}




function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/13")












