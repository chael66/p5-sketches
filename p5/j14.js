let font
let fSize=800 // font size
let jArray;
let r=0;

function preload() {
// setup()과 draw()를 호출하기에 앞서,
// assets 파일 경로에 .ttf 또는 .otf 폰트가 저장 및 로드되었는지 확인하세요. 
font = loadFont('../coolvetica rg.ttf');
}





function setup(){
    createCanvas(1000,1000);
    background(255);
    textFont(font);
    textSize(fSize);
   
    jArray = font.textToPoints("J",width/2-250,height/2+250,fSize,{
        sampleFactor :0.009
     
    })   
    console.log(jArray);
    noStroke();
    fill(0,random(80))
    for(let i=0; i<jArray.length;i++){

        // ellipse(jArray[i].x,jArray[i].y,10)
        circle(jArray[i].x,jArray[i].y,random(120))
        circle(jArray[i].x+10,jArray[i].y+10,random(80))
        circle(jArray[i].x+20,jArray[i].y+20,random(10))
        circle(jArray[i].x+30,jArray[i].y-10,random(60))
        circle(jArray[i].x+40,jArray[i].y-30,random(90))
        circle(jArray[i].x+50,jArray[i].y-20,random(40))
        // circle(jArray[i].x+60,jArray[i].y-20,random(100))
        circle(jArray[i].x+35,jArray[i].y-15,random(100))
 
  
      


   


  
   
}

function draw(){
  
    text("",width/2-250,height/2+250);

   
}
    // for(let i=0; i<jArray.length;i++){

    //     // ellipse(jArray[i].x,jArray[i].y,10)
    //     circle(jArray[i].x,jArray[i].y,random(150))
        
        
      
        // circle(random(jArray[i].x),random(jArray[i].y),10)
        
  
 
        // push();
        // translate(jArray[i].x-200,jArray[i].y+200)
        
        // // rotate(r);
        
        // // r++;
 
        // pop();
}   
    





function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/15")










