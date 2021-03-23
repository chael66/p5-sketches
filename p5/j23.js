
let J3;

function preload (){
   J3=loadImage('assets/J4png.jpg')

}

function setup() {
    noStroke() 
   var canvas= createCanvas(1000, 1000);

 
    // image(J3,0,0)
 

// unitSize=69;
// for (i=0;i<height;i=i+unitSize){
//     for(j=0; j<width; j=j+unitSize){
//          pixel =J3.get(j,i);
//          fill(pixel)
    
//         // randomSize=random(20,20)
//         for(k=0; k<100; k++)
        
//         ellipse(j+k,i+k,10,10)
        
    
//     }}
}


function draw(){
    background(255)
    unitSize=10;
for (i=0;i<height;i=i+unitSize){
    for(j=0; j<width; j=j+unitSize){
         pixel =J3.get(j,i);


         if (JSON.stringify(pixel)==JSON.stringify([115,238,121,255])){
            //  rRed=random(255);
            //  rGreen=random(255);
            //  rBlue=random(255);
            // //  fill(rRed,rGreen,rBlue);

            for(k=0;k<20;k++){
             rHSBcolor=random(70)+170
             stroke(rHSBcolor-k*5,90,250);
             strokeWeight(9)
             arc(j+k*2, i-k*10+100,120, 20, 0, HALF_PI);
            }
         }
    
    
        // randomSize=random(20,20)
        // for(k=0; k<50; k++){
        // rect(j,i,random(7),random(-100,200))
        // triangle(j,i,10)
    }
          
}}



function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/19")










