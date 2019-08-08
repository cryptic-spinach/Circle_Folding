var r = 250; // Radius
var px = 0; // x coord of focus
var py = 150; // y coord of focus
var makeBubs = true; // used to initiate bubbles
var bubbles = []; // used to initiate bubbles
var theta = 0; // position of bubble on the circle
var interval_track = 0;
var chord_interval = 1;
var theta_speed = 0.05;
var manual = true;


function setup() {
	dom_init();
}

function draw() {
	translate(windowWidth/2, windowHeight/2);
	rotate(Math.PI * 2);

	updateCoordinates(theta);

	if (makeBubs == true) {
		var b1 = new Bubble(xcoord, ycoord, 8.5);
		var b2 = new Bubble(midx, midy, 8.5);
		bubbles.push(b1);
		bubbles.push(b2);
	}

	var perpslope = -(px - xcoord)/(py - ycoord);

	makeBubs = false;

	if (manual) {
		clearChordTrails();
		chord(midx, midy, perpslope, r);

		updateCoordinates(theta);
		theta_slider.setValue(theta);

		if (keyIsDown(LEFT_ARROW)) {
			theta += 0.04;
			theta_slider.setValue(theta);
		}
		if (keyIsDown(RIGHT_ARROW)) {
			theta -= 0.04;
			theta_slider.setValue(theta);
		}

		greenCircle(0, 0);
		purpleDot(0, 0);
		purpleDot(px, py);

		updateCoordinates(theta);

		bubbles[0].x = xcoord;
		bubbles[0].y = ycoord;
		bubbles[0].show();

		bubbles[1].x = midx;
		bubbles[1].y = midy;
		bubbles[1].show();

	} else {
		theta += theta_speed;
		theta = theta % (Math.PI * 2)
		autoChord(midx, midy, perpslope)
		greenCircle(0, 0);
		purpleDot(0, 0);
		purpleDot(px, py);
		bubbles[0].hide();
		bubbles[1].hide();
	}


}

function clearChordTrails() {
	background(0);
}

function autoChord(midx, midy, perpslope) {
	// Chord trail spacing control
	if (interval_track < chord_interval) {
		interval_track += 1;
	} else {
		chord(midx, midy, perpslope, r);
		interval_track = 0;
	}
}



function windowResized() {
	// Responsive design
  resizeCanvas(windowWidth, windowHeight);
	background(0);
}

function updateCoordinates(theta) {
	xcoord = r * Math.sin(theta);
	ycoord = r * Math.cos(theta);
	midx = (xcoord + px)/2;
	midy = (ycoord + py)/2;
}
