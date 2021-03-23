
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
    unitSize=20;
for (i=0;i<height;i=i+unitSize){
    for(j=0; j<width; j=j+unitSize){
         pixel =J3.get(j,i);
         fill(pixel)
    
        // randomSize=random(20,20)
        // for(k=0; k<10; k++){
        
        rect(j,i,200,random(1,100))
    }
          
}}



function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/18")










