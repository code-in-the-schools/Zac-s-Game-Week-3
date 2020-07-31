var canvasW = 500, canvasH = 400;
var rectangle;
var rectSize = 20;
var rectangX = canvasW/2, rectangY = canvasH/2;
var rectangxVel = 1, rectangyVel = 0
var rectangTop = rectangY + rectSize/2, rectangB = rectangY + rectSize/2, rectangL = rectangX + rectSize/2, rectangR = rectangX + rectSize/2;

    


function setup() {
	createCanvas(canvasW, canvasH);
  rectangle = rect(rectangX, rectangY, rectSize, rectSize);
  rectangxVel = random(-6,6);
	rectangyVel = random(-6,6);
  ellipse(mouseX,mouseY,50)
  rect(50, 50, 100, 100,)
}

function draw() {
  background(color(0, 221, 255));

  bouncingrectangle();
  
  rectangle = rect(rectangX, rectangY, rectSize, rectSize), fill(255);
  //upper left rectangle
  rect(50, 50,70, 70), fill(255);
  //middle rectangle
  rect(340, 200, 40, 40), fill(255);
  //bottom rectangle
  rect(180, 320, 55,55),fill(255);
 
  ellipse(mouseX,mouseY,50), fill(0);
  
}

 function bouncingrectangle() {
   fill(207,181,59),
   rectangX = rectangX + rectangxVel;
   rectangL = rectangX - rectSize/2;
   rectangR = rectangX + rectSize/2;
   if ( ( rectangR > canvasW) || (rectangL < 0) ) {
     rectangxVel = -rectangxVel;
   }
  rectangY = rectangY + rectangyVel;
  rectangTop = rectangY - rectSize/2;
  rectangB = rectangY + rectSize/2;
  if ( (rectangB > canvasH) || (rectangTop < 0) ) {
    rectangyVel = -rectangyVel;
  }
 }