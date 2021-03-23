


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
    for (let i=0; i<20;i++){
        // strokeWeight(2.5)
        // stroke(180+i*4,255, 100) 
        // line(780-i*9,210-i*2,450-i*11,330-i*5)
    }

    for (let i=0; i<10;i++){
        strokeWeight(2)
        stroke(180+i*3,255, 100) 
     
        bezier(600+i*10,300-i*20, 800+i*10, 700+i*20, 500-i*20, 1100, 300+i*5, 800-i*10);
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










