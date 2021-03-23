


function setup() {
   var canvas= createCanvas(1000, 1000);
   var c=color(100, 126, 255, 102);
   background(255);
    // rect(0,0,1000,100);

    // stroke(255,100, 100) 
    stroke(255)
    strokeWeight(4)
    fill(255)
    for (let i=0; i<100;i++){
        rect(i+300,i+150,400,30);
        rect(i+500,i+150,40,600);
        rect(i+300,i+750,240,30);
        rect(i+300,i+600,40,150);
        stroke(255,100+i, i+100) 
    }





    

function draw() {
// rect(10,100,1000,100)
}



}


function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/17")










