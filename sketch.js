/*************************************************************************
  Code Self-Portrait
        by Katrina Monje

    (*)Overview - This project aims to capture the essence of a self-portrait,
                  eploring different shapes, functions, and loops.
 
    ---------------------------------------------------------------------
  Notes: (ie: To be fixed, I Need Help With, Clarify This, etc etc: )
     (1) I need help with creating loops for hair maybe?
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
  drawHairStrands();
  drawCoat();

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
  noFill();
  strokeWeight(4);
  stroke(0);
  bezier(468, 258, 439, 247, 416, 252, 406, 260); // left eyeline
  bezier(594, 268, 630, 253, 661, 260, 692, 272); // right eyeline
}

function drawNose() { // Nose
  noStroke();
  fill(230, 202, 169); // darker skin tone
  triangle(493, 253, 451, 377, 536, 372); // nose base
  ellipse(470, 371, 40, 40);
  arc(492, 373, 85, 40, 0, PI); // bottom nose
  arc(458, 375, 24, 32, HALF_PI, PI+HALF_PI);
  fill(213, 183, 165);
  arc(496, 391, 40, 8, PI, 0); // nostril
  noFill();
  strokeWeight(4);
  stroke(213, 183, 165);
  bezier(474, 233, 481, 243, 489, 266, 485, 280); // nose outline
  bezier(485, 283, 470, 317, 464, 335, 459, 355);
  bezier(458, 358, 452, 371, 455, 384, 467, 391);
}

function drawCheeks() { // Cheeks
  noStroke();
  fill(225, 149, 126, 45);
  ellipse(630, 365, 150, 120); // blush
  noFill();
  strokeWeight(5);
  stroke(230, 202, 169);
  bezier(561, 332, 551, 372, 613, 398, 592, 446); // check bone
}

function drawHair() { // Hair
  fill(0);
  noStroke();
  bezier(654, 70, 571, 56, 426, 68, 409, 219);
  bezier(635, 72, 647, 120, 715, 279, 808, 337); 
  bezier(633, 71, 712, 222, 782, 310, 838, 343);
  bezier(634, 70, 701, 67, 827, 92, 830, 338);
}

function drawBrows() { // Eyebrows
  noFill();
  strokeWeight(7);
  stroke(0);
  bezier(593, 240, 614, 224, 658, 231, 689, 243); // right brow
  bezier(466, 234, 444, 217, 415, 230, 409, 244); // left brow
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

function drawCoat() {
  noStroke();
  fill(187, 122, 48);
  quad(521, 543, 534, 784, 460, 774, 436, 606); // shoulder collar base
  quad(440, 602, 368, 635, 397, 734, 461, 771);
  fill(164, 112, 20); 
  quad(521, 543, 616, 746, 627, 844, 457, 748); // coat collar base
  noFill(0);
  strokeWeight(7);
  stroke(141, 99, 20);
  bezier(517, 539, 490, 592, 446, 590, 369, 633); // coat collar outline
  bezier(367, 634, 348, 649, 339, 716, 459, 769);
}

function drawHairStrands() {
  noFill(0);
  strokeWeight(7);
  stroke(50);
  bezier(633, 69, 571, 81, 471, 145, 410, 228); // strand 1
  bezier(633, 69, 473, 101, 445, 158, 400, 274); // strand 1
  bezier(791, 332, 812, 353, 801, 488, 719, 548);
  bezier(717, 550, 673, 604, 689, 720, 711, 790); // strand 2
  bezier(638, 74, 691, 167, 790, 307, 850, 349);
  bezier(638, 74, 674, 126, 757, 284, 910, 306); 
}