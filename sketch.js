var r = 250; // Radius
var px = 0; // x coord of focus
var py = 150; // y coord of focus
var makeBubs = true; //
var bubbles = [];
var theta = 0;
var interval_track = 0;
var chord_interval = 1;
var theta_speed = 0.05;

var midx_memory;
var midy_memory;
var perpslope_memory;

function setup() {
	createCanvas(windowWidth, windowHeight);
	translate(windowWidth/2, windowHeight/2);
	rotate(Math.PI/2);
	background(0);

	button = createButton('Clear chord trails');
	button.position(20, 20);
	button.mousePressed(clearChordTrails);

	slider = createSlider(0, Math.PI*2, 0, 0.04);
	slider.position(20, 100);
}

function draw() {
	theta += theta_speed;

	translate(windowWidth/2, windowHeight/2);
	rotate(Math.PI/2);

	purpleDot(0, 0);
	purpleDot(px, py);

	var xcoord = r * Math.sin(theta);
	var ycoord = r * Math.cos(theta);

	var midx = (xcoord + px)/2;
	var midy = (ycoord + py)/2;

	if (makeBubs == true) {
		var b1 = new Bubble(xcoord, ycoord, 8.5);
		var b2 = new Bubble(midx, midy, 8.5);
		bubbles.push(b1);
		bubbles.push(b2);
	}

	makeBubs = false;

	var perpslope = -(px - xcoord)/(py - ycoord);

	midx_memory = midx;
	midy_memory = midy;
	perpslope_memory = perpslope;

	greenCircle(0, 0);

	if (interval_track < chord_interval) {
		interval_track += 1;
	} else {
		chord(midx, midy, perpslope, r);
		interval_track = 0;
	}


	// bubbles[0].x = xcoord;
	// bubbles[0].y = ycoord;
	// bubbles[0].show();
	//
	// bubbles[1].x = midx;
	// bubbles[1].y = midy;
	// bubbles[1].show();

}


function clearChordTrails() {
	background(0);
}
