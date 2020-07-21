function rotateBoi() {
  translate(newX, newY);
  rotate(sigOutput);
  greyLine(0, 0, tempX, tempY);
  rotate(-sigOutput);
  translate(-newX, -newY);
}

function greenCircle(x, y) {
  stroke(0, 128, 0);
  fill(0, 0, 0, 0);
  ellipse(x, y, 500);
}

function purpleDot(x, y) {
	stroke(153,50,204);
	fill(153,50,204);
	ellipse(x, y, 7.5);
}

function orangeDot(x, y) {
  stroke(255, 165, 0);
  fill(255, 165, 0)
  ellipse(x, y, 7.5);
}



function greyLine(x1, y1, x2, y2) {
  stroke(180);
  line(x1, y1, x2, y2);
}

function chord(x1, y1, m, r) {
  var b = -m*x1 + y1;
  var d = Math.pow(m, 2) + 1;
  var e = 2*b*m;
  var f = Math.pow(b, 2) - Math.pow(r, 2);
  var pos_x = (-e + Math.sqrt(Math.pow(e, 2) - 4*d*f)) / (2*d);
  var pos_y = m * pos_x + b;
  var neg_x = (-e - Math.sqrt(Math.pow(e, 2) - 4*d*f)) / (2*d);
  var neg_y = m * neg_x + b;
  stroke(70, 179, 181);
  line(pos_x, pos_y, neg_x, neg_y);
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 255;
  }

  show() {
    noStroke();

    fill(0);
    ellipse(this.x, this.y, this.r);

    fill(255,165,0, this.brightness);
    ellipse(this.x, this.y, this.r);
  }

  hide() {
    noStroke();
    fill(0, 0, 0, 0);
  }
}
