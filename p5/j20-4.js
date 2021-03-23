
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

              rHSBcolor=random(255)
            fill(255,255,255,30);

             circle(j,i,random(150),random(150))
             rHSBcolor=random(100)+255
             fill(rHSBcolor,210,255);
             circle(j,i,random(150),random(100))
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



console.log("3/18")










