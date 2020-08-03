var canvasW = 500, canvasH = 400;
var rectangle;
var rectSize = 20;
var rectangX = canvasW/2, rectangY = canvasH/2;
var rectangxVel = 1, rectangyVel = 0
var rectangTop = rectangY + rectSize/2, rectangB = rectangY + rectSize/2, rectangL = rectangX + rectSize/2, rectangR = rectangX + rectSize/2;
var paddleW = 15, paddleH = 60;
var [paddleLeftX, paddleLeftY, lxspeed, lyspeed] = [20, canvasH/2, 0, 0];
var [paddleRightX, paddleRightY, rxspeed, ryspeed] = [canvasW-40, canvasH/2, 0,0];
var paddleLTop = paddleLeftY - paddleH/2, 
paddleLB   = paddleLeftY + paddleH/2, 
paddleRTop = paddleRightY - paddleH/2, 
paddleRB   = paddleRightY + paddleH/2,
paddleLleftside = paddleLeftX - paddleW/2, paddlelrightside= paddleLeftX + paddleW/2, paddleRleftside = paddleRightX - paddleW/2, paddleRrightside = paddleRightX + paddleW/2;

function setup() {
	createCanvas(canvasW, canvasH);
  rectangle = rect(rectangX, rectangY, rectSize, rectSize);
  rect(paddleLeftX,paddleLeftY,paddleW,paddleH);
  rect(paddleRightX,paddleRightY,paddleW,paddleH);
  rectangxVel = random(-6,6);
	rectangyVel = random(-6,6);
}

function draw() {
  background(color(0, 221, 255));

  bouncingrectangle();

  rect(paddleLeftX,paddleLeftY,paddleW,paddleH);
  rect(paddleRightX,paddleRightY,paddleW,paddleH);

  rectangle = rect(rectangX, rectangY, rectSize, rectSize), fill(255);

  movePaddleR();
  movePaddleL();

  bouncePaddles();
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

function movePaddleR() {
  if( paddleRightX >= 0 && paddleRightX + 50 <= 500) paddleRightX += rxspeed;
	if(paddleRightY >= 0 && paddleRightY + 50 <= 500) paddleRightY += ryspeed; 
}

function movePaddleL() {
  if(paddleLeftX >= 0 && paddleLeftX + 50 <= 500) paddleLeftX += lxspeed;
	if(paddleLeftY >= 0 && paddleLeftY + 50 <= 500) paddleLeftY += lyspeed;
}

//leftPaddle
function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			lxspeed = -2;
			break;
		case 39:
		case 68:
			lxspeed = 2;
			break;
		case 38:
		case 87:
			lyspeed = -2;
			break;
		case 40:
		case 83:
			lyspeed = 2;
			break;
	}
}
//leftPaddle
function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			lxspeed = 0;
			break;
		case 39:
		case 68:
			lxspeed = 0;
			break;
		case 38:
		case 87:
			lyspeed = 0;
			break;
		case 40:
		case 83:
			lyspeed = 0;
			break;
	}
}
//rightPaddle
function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			rxspeed = -2;
			break;
		case 39:
		case 68:
			rxspeed = 2;
			break;
		case 38:
		case 87:
			ryspeed = -2;
			break;
		case 40:
		case 83:
			ryspeed = 2;
			break;
	}
}
//rightPaddle
function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			rxspeed = 0;
			break;
		case 39:
		case 68:
			rxspeed = 0;
			break;
		case 38:
		case 87:
			ryspeed = 0;
			break;
		case 40:
		case 83:
			ryspeed = 0;
			break;
	}
}
//some of the code from: /p5js-Game-Starter#script.js

function bouncePaddles() {
	if ((rectangB >= paddleRTop) && (rectangTop <= paddleRB)) {
	if (rectangR <= paddleRleftside) {
		 rectangxVel = -rectangxVel;
		}
  }
}
