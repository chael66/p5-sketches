function setup(){
    var c =createCanvas(1000,1000);// width and height in Pixels
    background(255);
}


function draw (){
 
    noFill(0)
    stroke(0)    
    if(mouseIsPressed){
        // line(mouseX+0,mouseY-100,mouseX+0,mouseY+70)
        // line(mouseX+0,mouseY-random(800),mouseX+0,mouseY+100)
        noStroke()
        fill(random(255),50)
        rect(mouseX-100,mouseY-100,random(600),random(400))
      
    }
    fill(255);
    noStroke();
    rect(0,0,1000,100)
    rect(0,0,200,1000)
    rect(0,900,1000,1000)
    rect(800,0,200,1000)
    rect(200,250,300,350)
    rect(650,250,150,800)
    rect(350,600,150,150)
}


// function mousePressed(){
//     saveCanvas("J-X","png")
// }

