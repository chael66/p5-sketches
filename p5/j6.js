

function setup(){
    var c =createCanvas(1000,1000);// width and height in Pixels
//    stroke()
    background(255);
    noStroke(255)
    fill(0)
    rect(300,100,400,10)
    circle(440,630,300)
    fill(255)
    circle(440,620,300)
    fill(0)

    rect(450,100,150,530)
    arc(450, 630, 300, 300, 0, HALF_PI)
    circle(330,630,80)
}






function mousePressed(){
    saveCanvas("J-X","png")
}




console.log("js6")