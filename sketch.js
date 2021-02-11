/*************************************************************************
    Code Self-Portrait
        by Katrina Monje

    This project aims to capture the essence of a self-portrait, 
    exploring different shapes, functions, and loops.
 
    ---------------------------------------------------------------------
    Notes:
     (1)
     (2)
**************************************************************************/

var gDebugMode = true;

// Setup code goes here
function setup() {
  createCanvas(1500, 800);

  ellipseMode(CENTER);

  textSize(24);
  textAlign(LEFT);
 }


// Draw code goes here
function draw() {
  background(0);

  drawHead();

  displayDebugInfo();  
} // end function draw()

function drawHead() {
  fill(249, 219, 189);
  ellipse(width/2, height/2, 370, 450);
  noStroke();
  translate(548, 416);
  rotate(radians(45));
  ellipse(0, 0, 270, 300);
}

function displayDebugInfo() {
  // print to console
  print("x: " + mouseX + " Y: " + mouseY);

  // print to display
  if (gDebugMode == true) {
    fill(255);
    text("X: " + mouseX + " Y: " + mouseY, 20, height - 20);
  } // end if
}

// keyTyped gets triggered using spacebar
function keyTyped() {
	if (key === ' ') {
		gDebugMode = !gDebugMode;
  }
}

