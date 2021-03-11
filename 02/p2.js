function setup(){
    var c =createCanvas(1000,1000);// width and height in Pixels
    background(255);
    
    noFill(0)
    stroke(0)   
    for( var i=0; i<20;i++){
    line((300),100+random(130),800,100+random(130)) 
    }
    for( var i=0; i<70;i++){
    line((540),200+random(600),660,200+random(600)) 
    }
    for( var i=0; i<20;i++){
    line((300),750+random(130),660,750+random(130))
    } 
    for( var i=0; i<30;i++){
    line((300),650+random(160),430,650+random(160))
    } 

    // line(random(1000),200,1000,200) 
    // line(random(1000),400,1000,400) 
    // line(random(1000),500,1000,500) 
    // line(random(1000),600,1000,600) 
    // line(random(1000),700,1000,700) 
    // line(random(1000),800,1000,800) 
    // line(random(1000),900,1000,900) 
    // line(random(1000),870,1000,870) 
    // line(random(1000),760,1000,760) 
    // line(random(1000),230,1000,230) 
    // line(random(1000),120,1000,120) 
    // line(random(1000),420,1000,420)
    
    

    

  


}
// function draw (){
 
//     noFill(0)
//     stroke(0)    
//     if(mouseIsPressed){
//         // line(mouseX+0,mouseY-100,mouseX+0,mouseY+70)
//         // line(mouseX+0,mouseY-random(800),mouseX+0,mouseY+100)
//         rect(mouseX-100,mouseY-100,random(500),random(600))
      
//     }
    
// }


function mousePressed(){
    saveCanvas("J-X","png")
}

