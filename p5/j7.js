




function setup(){
    var c=createCanvas(1000,1000);
    background(255);
    stroke(0);
    noFill();
    
    for(i=0; i<500; i=i+5){
        ellipse(300+i,100,100)
    }
    for(i=0; i<602; i=i+5){
        ellipse(600,100+i,100)
    }
    for(i=0; i<300; i=i+5){
        ellipse(300+i,700,100)
    }
    for(i=0; i<200; i=i+5){
        ellipse(300,500+i,100)
    }




}




function mousePressed(){
    saveCanvas("J-X","png")
}



















console.log("3/12")