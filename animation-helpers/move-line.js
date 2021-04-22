function moveLine(x, a, b, k) {
	var sigmoid =  k / (1 + Math.pow(Math.E, a + b*x));
	return sigmoid;
}