let font
let fSize=600 // font size
let msg // text to write
let pts = [] // store path data
let jArray;
let r=0;

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
        sampleFactor :0.6
    })
    
    
   
    
   


    
   
}

function draw(){
    fill(0,100)
    stroke(255)
 
    strokeWeight(1)
    text("",width/2,height/2);
    for(let i=0; i<jArray.length;i++){
        
        push();
        
        translate(jArray[i].x-300,jArray[i].y+50);
        rotate(120);
        
       
        rect(0, 0, 350, 10);
        pop();
     
    }


}




function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/14")












