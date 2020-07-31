var canvasW = 500, canvasH = 400;
var rectangle;
var rectSize = 20;
var rectangX = canvasW/2, rectangY = canvasH/2;
var rectangxVel = 1, rectangyVel = 0
var rectangTop = rectangY + rectSize/2, rectangB = rectangY + rectSize/2, rectangL = rectangX + rectSize/2, rectangR = rectangX + rectSize/2;
var paddle;
var paddleW = 15, paddleH = 60, paddleVel = 5;
var paddleLeftX = 20, paddleLeftY=canvasH/2;
var paddleRightX = canvasW-40, paddleRightY = canvasH/2, paddleLTop = paddleLeftY - paddleH/2, 
paddleLB = paddleLeftY + paddleH/2, 
paddleRTop = paddleRightY - paddleH/2, 
paddleRB = paddleRightY + paddleH/2;

function setup() {
	createCanvas(canvasW, canvasH);
  rectangle = rect(rectangX, rectangY, rectSize, rectSize);
  rect(20,canvasH/2,paddleW,paddleH);
  rect(canvasW-40,canvasH/2,paddleW,paddleH);
  rectangxVel = random(-6,6);
	rectangyVel = random(-6,6);
}

function draw() {
  background(color(0, 221, 255));

  bouncingrectangle();

  rect(20,canvasH/2,paddleW,paddleH);
  rect(canvasW-40,canvasH/2,paddleW,paddleH);

  rectangle = rect(rectangX, rectangY, rectSize, rectSize), fill(255);
  
  movepaddles();
  
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

 function movepaddles(){
paddleLTop = paddleLeftY - paddleH/2, 
paddleLB = paddleLeftY + paddleH/2, 
paddleRTop = paddleRightY - paddleH/2, 
paddleRB = paddleRightY + paddleH/2;

	if (keyIsDown(87) && (paddleLTop > 0)) {
		paddleLeftY -= paddleVel;
	} else if (keyIsDown(83) && (paddleLB < canvasH)) {
		paddleLeftY += paddleVel;
	}

	if (keyIsDown(79) && (paddleRTop > 0)) {
		paddleRightY -= paddleVel;
	} else if (keyIsDown(76) && (paddleRB < canvasH)) {
		paddleRightY += paddleVel;
	}

 }
 