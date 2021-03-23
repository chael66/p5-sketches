
let J3;

function preload (){
   J3=loadImage('assets/J4png.jpg')

}

function setup() {
    // stroke(0) 
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
         stroke(pixel)
         strokeWeight(0.8)
    
        // randomSize=random(20,20)
        for(k=0; k<20; k++){
        
        line(j,i,j-k,i+k*10)
        line(j,i,j-k*10,i+k)
        line(j+k,i+k,j-k,i+k)
      }
    }
  }    
}



function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/18")










