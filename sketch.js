/*************************************************************************
  Code Self-Portrait
        by Katrina Monje

    (*)Overview - This project aims to capture the essence of a self-portrait,
                  eploring different shapes, functions, and loops.
 
    ---------------------------------------------------------------------
  Notes: (ie: To be fixed, I Need Help With, Clarify This, etc etc: )
     (1)
     (2)
**************************************************************************/
var gDebugMode = true;

// Setup code goes here
function setup() {
  createCanvas(1200, 1000);

  ellipseMode(CENTER);

  textSize(24);
  textAlign(LEFT);

 }


function draw() {
  background(200, 162, 200); // lilac

  drawNeck();
  drawHead();
  drawEyes();
  drawNose();
  drawCheeks();
  drawHair();
  drawBrows();
  drawMouth();

  // Debug mode
  if( gDebugMode == true ){
   drawDebugInfo();
  }
}

function drawDebugInfo() { //Debug display on screen
  fill(255);
  noStroke();
  text("X: " + mouseX + " Y: " + mouseY, 20, height - 500);

}

// keyTyped gets triggered using spacebar
function keyTyped() {
  if (key === ' ') {
    gDebugMode = !gDebugMode;
 }

}

function drawNeck() {
  fill(230, 202, 169);
  noStroke();
  triangle(519, 539, 693, 508, 608, 737);
}

function drawHead() { // Head
  fill(249, 219, 189); // base skin tone
  noStroke();
  ellipse(600, 300, 400, 470);
  ellipse(540, 320, 290, 340);
  ellipse(540, 340, 290, 340);
  ellipse(540, 350, 290, 340);
  ellipse(540, 360, 310, 360);
  ellipse(550, 350, 320, 380);
  ellipse(580, 372, 332, 360); // chin
}

function drawEyes() { // Eyes
  fill(255); // white
  arc(435, 260, 65, 20, PI, 0); // top left eye
  arc(435, 260, 65, 20, 0, PI); // bottom right eye
  arc(639, 272, 85, 30, PI, 0); // top right eye
  arc(639, 272, 85, 25, 0, PI); // bottom right eye
  fill(0);
  strokeWeight(2);
  ellipse(445, 260, 20, 20); // left pupil
  ellipse(639, 272, 25, 25); // right pupil
  fill(255);
  ellipse(449, 258, 4, 4);
  ellipse(640, 268, 5, 5); 
}

function drawNose() { // Nose
  fill(230, 202, 169); // darker skin tone
  triangle(493, 253, 451, 377, 536, 372); //base
  ellipse(470, 371, 40, 40);
  arc(492, 373, 85, 40, 0, PI); // bottom nose
  arc(470, 377, 24, 32, HALF_PI, PI+HALF_PI);
  fill(213, 183, 165);
  arc(496, 391, 40, 8, PI, 0); // nostril
}

function drawCheeks() { // Cheeks
  fill(225, 149, 126, 45);
  ellipse(609, 359, 100, 100); // blush
  noFill();
  strokeWeight(5);
  stroke(230, 202, 169);
  bezier(561, 332, 551, 372, 613, 398, 592, 446); // check bone
}

function drawHair() { // Hair
  noFill(0);
  strokeWeight(7);
  stroke(0);
  bezier(633, 69, 571, 81, 471, 145, 410, 228); // left strand
  fill(0);
  noStroke();
  bezier(635, 72, 647, 120, 715, 279, 830, 340); 
  bezier(633, 71, 656, 113, 659, 324, 791, 333);
  bezier(791, 332, 812, 353, 790, 467, 719, 548);
  bezier(634, 70, 701, 67, 827, 92, 830, 338);
}

function drawBrows() { // Eyebrows
  noFill();
  strokeWeight(7);
  stroke(0);
  bezier(593, 240, 614, 224, 658, 231, 689, 243); // right brow
  bezier(457, 230, 444, 217, 415, 230, 405, 239); // left brow
}

function drawMouth() { // Mouth
  fill(255, 145, 146, 97);
  noStroke();
  arc(459, 432, 30, 20, PI, 0); // lips base
  arc(494, 433, 49, 20, PI, 0);
  arc(498, 436, 90, 39, 0, PI);
  arc(490, 433, 80, 30, 0, PI);
  strokeWeight(2);
  stroke(255, 145, 146);
  beginShape(); // lips outline
  vertex(424, 430);
  vertex(463, 423);
  vertex(474, 426);
  vertex(488, 421);
  vertex(493, 421);
  endShape();
  noFill();
  bezier(494, 422, 512, 428, 523, 436, 580, 442); // upper lip line
  bezier(439, 428, 454, 443, 470, 451, 487, 457);
  bezier(439, 429, 471, 434, 500, 443, 548, 438); // middle line
  bezier(487, 457, 501, 459, 544, 442, 548, 439); // lower lip line
}