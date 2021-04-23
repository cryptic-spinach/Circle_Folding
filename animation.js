function setup() {
	dom_init();
}

function draw() {
	translate(windowWidth/2, windowHeight/2);
	updateCoordinates(theta);

	if (makeBubs == true) {
		var b1 = new Bubble(onCircle_X, onCircle_Y, 8.5);
		var b2 = new Bubble(mid_X, mid_Y, 8.5);
		var b3 = new Bubble(0, 0, 8.5);
		bubbles.push(b1);
		bubbles.push(b2);
		bubbles.push(b3);
	}

	perpslope = -(focus_X - onCircle_X)/(focus_Y - onCircle_Y);

	makeBubs = false;

	if (manual) {
		clearChordTrails();
		chord(mid_X, mid_Y, perpslope, r);
		updateCoordinates(theta);

		// sigmoidRotation gets confused when you use the arrow keys while rotation is inprogress
		// so prevent that scenario here
		if (allowArrowKeys) {
			if (keyIsDown(LEFT_ARROW)) {
				theta += 0.02;
				console.log(theta);
			}
			if (keyIsDown(RIGHT_ARROW)) {
				theta -= 0.02;
				console.log(theta);
			}
		}

		updateCoordinates(theta);

		greenCircle(0, 0);

		bubbles[0].x = onCircle_X;
		bubbles[0].y = onCircle_Y;
		bubbles[0].show();

		bubbles[1].x = mid_X;
		bubbles[1].y = mid_Y;
		bubbles[1].show();

		radius_slope = onCircle_Y/onCircle_X;

		boundary_X = (perpslope * mid_X - mid_Y)/(perpslope - radius_slope);
		boundary_Y = perpslope * (boundary_X - mid_X) + mid_Y;

		// phi is the angle formed by point on circle, ellipse boundary point, and midpoint
		if (theta > 0) {
			phi = Math.atan(dist(onCircle_X, onCircle_Y, mid_X, mid_Y)/dist(boundary_X, boundary_Y, mid_X, mid_Y));
		} else {
			phi = -Math.atan(dist(onCircle_X, onCircle_Y, mid_X, mid_Y)/dist(boundary_X, boundary_Y, mid_X, mid_Y));
		}

		temp_X = onCircle_X - boundary_X;
		temp_Y = onCircle_Y - boundary_Y;

		// This conrols the animation when you click "Switch to Foci View or Switch to Radius View"
		if (fociMode == false){
			if (sigmoidInput <= 100) {
				allowArrowKeys = false;
				sigmoidInput += 1;
				sigmoidOutput = sigmoidRotation(sigmoidInput, 5, -0.1, 2 * phi);
				radiusToFociRotate();
			} else {
				greyLine(focus_X, focus_Y, boundary_X, boundary_Y);
				allowArrowKeys = true;
			}
		} else {
			if (sigmoidInput >= 0) {
				allowArrowKeys = false;
				sigmoidInput -= 1;
				sigmoidOutput = sigmoidRotation(sigmoidInput, 5, -0.1, 2 * phi);
				radiusToFociRotate();
			} else {
				greyLine(0, 0, onCircle_X, onCircle_Y);
				allowArrowKeys = true;
			}
		}

		bubbles[2].x = boundary_X;
		bubbles[2].y = boundary_Y;
		bubbles[2].show();

		greyLine(0, 0, boundary_X, boundary_Y);
		purpleDot(0, 0);
		orangeDot(focus_X, focus_Y);

	} else { // Auto mode
		theta += theta_speed;
		theta = theta;
		createChordTrails(mid_X, mid_Y, perpslope);
		greenCircle(0, 0);
		purpleDot(0, 0);
		purpleDot(focus_X, focus_Y);
		bubbles[0].hide();
		bubbles[1].hide();
	}

}

