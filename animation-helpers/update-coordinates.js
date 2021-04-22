function updateCoordinates(theta) {
	xcoord = r * Math.sin(theta);
	ycoord = r * Math.cos(theta);
	midx = (xcoord + focus_X)/2;
	midy = (ycoord + focus_Y)/2;
	//theta = theta % (Math.PI * 2);
}