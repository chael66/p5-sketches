function setup(){
    var c =createCanvas(1000,1000);// width and height in Pixels
    background(255);
    
    

    var i= 0 ;
    stroke(0)
    noFill(0);
     for( var i=0;  i<100; i++){
         //add our code here.
        //  fill(random(155))
         rect(i*50,i*50,100,100)
         rect(i*50,i*50,90,90)
         rect(i*50,i*50,80,80)
         rect(i*50,i*50,70,70)
     }

     fill(0)
     noStroke(255)
 
     // ellipse(450,600,300,400)
     rect(500,100,100,600) 
     rect(300,100,400,100)
     rect(300,600,200,100)
     rect(300,500,100,200)



}

// function mousePressed(){
//     saveCanvas("J-X","png")
// }

