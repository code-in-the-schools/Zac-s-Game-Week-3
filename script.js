var canvasW = 500, canvasH = 400;
var rectangle;
var rectSize = 20;
var rectangX = canvasW/2, rectangY = canvasH/2;
var rectangxVel = 1, rectangyVel = 0
var rectangTop = rectangY + rectSize/2, rectangB = rectangY + rectSize/2, rectangL = rectangX + rectSize/2, rectangR = rectangX + rectSize/2;
var rackettW = 15, rackettL = 60;
    


function setup() {
	createCanvas(canvasW, canvasH);
  rectangle = rect(rectangX, rectangY, rectSize, rectSize);
  rectangxVel = random(-3,6);
	rectangyVel = random(-3,6);
  rect(20,200,rackettW,rackettL)
}

//var [xrot, yrot, t] = [350, 200, 1];

function draw() {
  background(color(0, 100, 0));

  bouncingrectangle();

  rect(20,200,rackettW,rackettL)  
  rect(canvasW-40,200,rackettW,rackettL) 

  rectangle = rect(rectangX, rectangY, rectSize, rectSize);
    	// thing you move
	//fill(0, 255, 0);
	//ellipse(mouseX, mouseY, 50);
	
	// big wheel
	//(255);
	//ellipse(350, 250, 100);
}

 function bouncingrectangle() {
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