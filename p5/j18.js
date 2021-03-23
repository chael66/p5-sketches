


function setup() {
   var canvas= createCanvas(1000, 1000);
   var c=color(100, 126, 255, 102);
   background(0);
    // rect(0,0,1000,100);

    // stroke(255,100, 100) 
    stroke(0)
    // strokeWeight(0.6)
    noFill()
    // bezier(650,200, 700, 600, 600, 1000,400, 650);
    for (let i=0; i<50;i++){
        strokeWeight(2.5)
        stroke(255,100+i*1.6, 100) 
        line(760-i*3.5,210-i,450-i*3.5,330-i)
    }

    for (let i=0; i<100;i++){
        strokeWeight(2)
        stroke(255,100+i*0.8, 100) 
     
        bezier(600-i*1.5,250-i*0.3, 900-i, 800-i, 400-i, 1200,430-i*1.4, 650 -i*0.3);
        // bezier(600,200, 650, 550, 600, 1000,350, 600);
        // line(300-i,250+100-i,750+50-i,50+100-i)
    
    }





    

function draw() {
// rect(10,100,1000,100)
}



}


function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/17")










