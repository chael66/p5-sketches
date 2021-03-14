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
        sampleFactor :0.21
    })
    
    stroke(0)
    strokeWeight(2)
    noFill();
    
   


    
    fill(0)
}

function draw(){
    text("",width/2,height/2);
    for(let i=0; i<jArray.length;i++){
        push();
        // ellipse(jArray[i].x,jArray[i].y,10,10);
        translate(jArray[i].x,jArray[i].y);
        // line(jArray[i].x,jArray[i].y,100,600)
        line(-10,-10,10,10);
        pop();
    }


}




function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/14")












