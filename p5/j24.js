let r=0;
let J3;
let x=600
let y=200;

function preload (){
   J3=loadImage('assets/J4png.jpg')

}

function setup() {
   
   var canvas= createCanvas(1000, 1000);

 

}


function draw(){
    background(255)
    // fill(255,0)
    //  fill(255-i)
    for(i=0;i<32;i++){
        noStroke()
        fill(255,100,100,0+i*5)
        circle(x,y+i*20,100)
        
     
       
        
    
  
    circle(600,800,100)
    circle(600,820,100)
    circle(580,840,100)
    circle(560,860,100)
    circle(540,860,100)
    circle(520,860,100)
    circle(500,860,100)
    circle(480,860,100)
    circle(460,860,100)
    circle(440,860,100)
    circle(420,860,100)
    circle(400,860,100)
    circle(380,840,100)
    circle(360,820,100)
    circle(340,800,100)
    circle(320,780,100)
    circle(320,760,100)
    circle(320,740,100)
    circle(320,720,100)
    circle(320,700,100)
        
    }
}

    
         



function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/22")










