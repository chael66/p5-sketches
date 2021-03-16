let font
let fSize=800 // font size

let pts = [] // store path data
let jArray;
let r=0;

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
   
    jArray = font.textToPoints("J",width/2,height/2,fSize,{
        sampleFactor :0.2
        // print();
    })
    
    
   
    
   


    
   
}

function draw(){
    fill(0,100)
    stroke(0)
 
    strokeWeight(1)
    // text("J",width/2-250,height/2+250);


    for(let i=0; i<jArray.length;i++){
        push();
        translate(jArray[i].x-200,jArray[i].y+200)
        rotate(r);
        r++;
        line(-80,-40,10,10);
       
        pop();
        
       
     
    }


}




function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/15")












