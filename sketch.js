var r = 250;
var px = 0;
var py = 200;
var makeBubs = true;
var bubbles = [];
var theta = 0;
var interval_track = 0;
var theta_speed = 0.3;

var midx_memory;
var midy_memory;
var perpslope_memory;

function setup() {
	createCanvas(windowWidth, windowHeight);
	translate(windowWidth/2, windowHeight/2);
	rotate(Math.PI/2);
	background(0);
	// slider = createSlider(0, Math.PI*2, 0, 0.04);
	// slider.position(20, 20);
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

	chord(midx, midy, perpslope, r);

	// bubbles[0].x = xcoord;
	// bubbles[0].y = ycoord;
	// bubbles[0].show();
	//
	// bubbles[1].x = midx;
	// bubbles[1].y = midy;
	// bubbles[1].show();

}


function mousePressed () {
	background(0);
}
