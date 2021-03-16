
        let font
        let fSize=600
        let msg // text to write
        let jArray=[];
        // let jArrayX= [515.6,610.1,609.23,557.95,454.77,360.28,332.9,422.11,464.66,515.6]; // store path data
        // let jArrayY = [248.49,239.91,351.02,462.13,573.21,668.21,698.56,645,95,541.30,519.4,605.37,526.87,415.75,304.64]
        function preload() {
            // preload OTF font file
            font = loadFont('../absender1.ttf')
        }

        function setup() {
            
            createCanvas(1000, 1000)
            background(255)
            
            textFont(font)
            textSize(fSize)
            msg = 'J'
            jArray = font.textToPoints(msg, width/2-300,height/2, fSize, {
                sampleFactor: 0.27, 
                simplifyThreshol: 0.0
            })
            console.log(jArray); // { x, y, path angle }

          

            stroke(0);
            strokeWeight(random(0.65));
            fill(0);
        //     for(i=0;i<jArray.length;i++){
        //         if(655>jArray[i].x>=337||172<jArray[i].y<700) {
               
                
        //         //  line(jArray[i].x,jArray[i].y,random(jArray[i].x+1000),random(jArray[i].y+800))
        //         circle(0,0,10);}
        // }

            fill(255);
           
            
        }

        function draw() {
            // text("",width/2,height/2,)
            for(let i=0;i<jArray.length;i++){

            
                push();
                translate(jArray[i].x,jArray[i].y);
                 line(jArray[i].x,jArray[i].y,0,0)
                // ellipse(0,00,20);}
                pop();
        }
     
    

    }


function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/15")










