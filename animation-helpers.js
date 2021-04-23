function sigmoidRotation(x, a, b, k) {
	var sigmoid =  k / (1 + Math.pow(Math.E, a + b*x));
	return sigmoid;
}

function updateCoordinates(theta) {
	onCircle_X = r * Math.sin(theta);
	onCircle_Y = r * Math.cos(theta);
	mid_X = (onCircle_X + focus_X)/2;
	mid_Y = (onCircle_Y + focus_Y)/2;
}

function clearChordTrails() {
	background(0);
}

function createChordTrails(midx, midy, perpslope) {
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

function radiusToFociRotate() {
    var tempSigOutput = sigmoidOutput;
    
    if (Math.abs(theta) % (2 * Math.PI) > Math.PI ) {
      tempSigOutput *= -1;
    }
  
    translate(boundary_X, boundary_Y);
    rotate(tempSigOutput);
    greyLine(0, 0, temp_X, temp_Y);
    rotate(-tempSigOutput);
    translate(-boundary_X, -boundary_Y);
  }