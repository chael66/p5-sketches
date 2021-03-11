function setup(){
    var c =createCanvas(1000,1000);// width and height in Pixels
    background(255);


    noFill(0)
    stroke(0)   
    for( var i=0; i<100;i++){
    line(0,random(1000),1000,random(1000)) 
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

    // rect(100,250,250,1000)
    // rect(300,250,100,1000)
}

function mousePressed(){
    saveCanvas("J-X","png")
}
