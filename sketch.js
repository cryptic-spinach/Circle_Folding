var r = 250;
var focus_X = 0;
var focus_Y = 150;
var makeBubs = true;
var bubbles = [];
var theta = 0.01;
var interval_track = 0;
var chord_interval = 1;
var theta_speed = 0.05;
var manual = true;
var phi;
var newX;
var newY;
var m2;
var tempX, tempY;
var sigInput = 0;
var sigOutput;
var fociMode = false;
var perpslope;

function setup() {
	dom_init();
}

function draw() {
	translate(windowWidth/2, windowHeight/2);
	updateCoordinates(theta);

	if (makeBubs == true) {
		var b1 = new Bubble(xcoord, ycoord, 8.5);
		var b2 = new Bubble(midx, midy, 8.5);
		var b3 = new Bubble(0, 0, 8.5);
		bubbles.push(b1);
		bubbles.push(b2);
		bubbles.push(b3);
	}

	perpslope = -(focus_X - xcoord)/(focus_Y - ycoord);

	makeBubs = false;

	if (manual) {
		clearChordTrails();
		chord(midx, midy, perpslope, r);
		updateCoordinates(theta);
		// theta_slider.setValue(theta);

		if (keyIsDown(LEFT_ARROW)) {
			theta += 0.02;
			console.log(theta)
			// theta_slider.setValue(theta);
		}
		if (keyIsDown(RIGHT_ARROW)) {
			theta -= 0.02;
			// theta_slider.setValue(theta);
		}

		updateCoordinates(theta);

		greenCircle(0, 0);

		bubbles[0].x = xcoord;
		bubbles[0].y = ycoord;
		bubbles[0].show();

		bubbles[1].x = midx;
		bubbles[1].y = midy;
		bubbles[1].show();

		m2 = ycoord/xcoord;
		newX = (perpslope * midx - midy)/(perpslope - m2);
		newY = perpslope * (newX - midx) + midy;

		if (theta < Math.PI) {
			phi = Math.atan(dist(xcoord, ycoord, midx, midy)/dist(newX, newY, midx, midy));
		} else {
			phi = -Math.atan(dist(xcoord, ycoord, midx, midy)/dist(newX, newY, midx, midy));
		}

		tempX = xcoord - newX;
		tempY = ycoord - newY;

		// This conrols the animation when you click "Switch to Foci View or Switch to Radius View"
		if (fociMode == false){
			if (sigInput <= 100) {
				sigInput += 1;
				sigOutput = moveLine(sigInput, 5, -0.1, 2 * phi);
				rotateBoi();
			} else {
				greyLine(focus_X, focus_Y, newX, newY)
			}
		} else {
			if (sigInput >= 0) {
				sigInput -= 1;
				sigOutput = moveLine(sigInput, 5, -0.1, 2 * phi);
				rotateBoi();
			} else {
				greyLine(0, 0, xcoord, ycoord);
			}
		}

		bubbles[2].x = newX;
		bubbles[2].y = newY;
		bubbles[2].show();

		greyLine(0, 0, newX, newY);
		purpleDot(0, 0);
		orangeDot(focus_X, focus_Y);

	} else { // Auto mode
		theta += theta_speed;
		theta = theta;
		autoChord(midx, midy, perpslope);
		greenCircle(0, 0);
		purpleDot(0, 0);
		purpleDot(focus_X, focus_Y);
		bubbles[0].hide();
		bubbles[1].hide();
	}

}

function clearChordTrails() {
	background(0);
}

function autoChord(midx, midy, perpslope) {
	if (interval_track < chord_interval) {
		interval_track += 1;
	} else {
		chord(midx, midy, perpslope, r);
		interval_track = 0;
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
	background(0);
}
