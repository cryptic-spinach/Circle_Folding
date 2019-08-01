var r = 250; // Radius
var px = 0; // x coord of focus
var py = 150; // y coord of focus
var makeBubs = true; // used to initiate bubbles
var bubbles = []; // used to initiate bubbles
var theta = 0;
var interval_track = 0;
var chord_interval = 1;
var theta_speed = 0.05;
var previous_theta;
var manual = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	translate(windowWidth/2, windowHeight/2);
	rotate(Math.PI * 2);
	background(0);

	clear_button = createButton('Clear chord trails');
	clear_button.position(20, 20);
	clear_button.mousePressed(clearChordTrails);

	toggle_button = createButton('Auto/Manual toggle');
	toggle_button.position(150, 20);
	toggle_button.mousePressed(toggle);

	slider = createSlider(0, Math.PI*2, 0, 0.04);
	slider.position(20, 90);

	theta_text = createElement('p', 'Theta');
	theta_text.position(200, 55);
	theta_text.style('color', 'rgb(255, 255, 255)')
	theta_text.style('font-size', '28px');
	theta_text.style('font-family', 'Calibri')
}

function draw() {
	translate(windowWidth/2, windowHeight/2);
	rotate(Math.PI * 2);

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

	greenCircle(0, 0);

	if (manual) {
		theta = slider.value()
		clearChordTrails();
		chord(midx, midy, perpslope, r);
	} else {
		autoChord(midx, midy, perpslope)
		theta += theta_speed;
	}

	greenCircle(0, 0);
	purpleDot(0, 0);
	purpleDot(px, py);
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

function autoChord(midx, midy, perpslope) {
	if (interval_track < chord_interval) {
		interval_track += 1;
	} else {
		chord(midx, midy, perpslope, r);
		interval_track = 0;
	}
}

function toggle() {
	if (manual == true) {
		manual = false;
	} else {
		manual = true;
	}
}
