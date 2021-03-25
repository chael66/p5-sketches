
let J3;

function preload (){
   J3=loadImage('assets/J4png.jpg')

}

function setup() {
    noStroke() 
   var canvas= createCanvas(1000, 1000);
   frameRate(30)
   createLoop({duration:3, gif:true})
 

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

            //   rHSBcolor=random(255)
            fill(0,random(255));

             rect(j,i-40,random(4),random(-80,160))
             
            //  rHSBcolor=random(100)+255

            //  fill(rHSBcolor,210,255);
            //  rect(j,i,10,random(100))
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










