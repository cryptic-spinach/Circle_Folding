function sigmoidRotation(x, a, b, k) {
	var sigmoid =  k / (1 + Math.pow(Math.E, a + b*x));
	return sigmoid;
}

function updateCoordinates(theta) {
	onCircle_X = r * Math.sin(theta);
	onCircle_Y = r * Math.cos(theta);
	midx = (onCircle_X + focus_X)/2;
	midy = (onCircle_Y + focus_Y)/2;
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
    
    if (theta < 0 || theta > 2 * Math.PI ) {
      tempSigOutput *= -1
    }
  
    translate(newX, newY);
    rotate(tempSigOutput);
    greyLine(0, 0, tempX, tempY);
    rotate(-tempSigOutput);
    translate(-newX, -newY);
  }