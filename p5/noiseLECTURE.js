

// var xOffset1=0;
// var xOffset2=1000;

var inc =0.01;
var start =0;
function setup(){
    var c=createCanvas(1000,1000);

   

  
    
    
}

function draw(){
    background(255);

    stroke(0);
    noFill();
    beginShape();

    var xOffset =start;

    for (var x = 0; x<width; x++){
            stroke(0);
            // var y =random(height);
            var y= noise(xOffset)*height;
            vertex (x,y);

            xOffset +=inc;

    }
    endShape();
    start += inc;
    // noLoop();
    // var x=random(width);
    // var x= map(noise(xOffset1),0,1,0,width);
    // var y= map(noise(xOffset2),0,1,0,height);


    // xOffset1 +=0.02;
    // xOffset2 +=0.02;

    //    ellipse(x,y,24,24);
       
     1
}







// function mousePressed(){
//     saveCanvas("J-X","png")
// }



console.log("3/25")












