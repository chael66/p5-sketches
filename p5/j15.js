
        let font
        let fSize=700
        let msg // text to write
        let jArray = []; // store path data

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
            jArray = font.textToPoints(msg, width/2-200,height/2+200, fSize, {
                sampleFactor: 0.9, 
                simplifyThreshold: 0.0 
            })
            console.log(jArray); // { x, y, path angle }

            stroke(0)
            strokeWeight(0.3)
            noFill();
            for(i=0;i<jArray.length;i++)
            line(jArray[i].x-random(100),jArray[i].y-random(100),jArray[i].x,jArray[i].y)
        }

        function draw() {
            
  

           
        }




function mousePressed(){
    saveCanvas("J-X","png")
}



console.log("3/15")










