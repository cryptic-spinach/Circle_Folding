// Radius of the main circle
var r = 250;

// This is the noncenter focus of the ellipse
var focus_X = 0;
var focus_Y = 150;

// This is the point that lies on the chord and is equidistant from the point on the circle and the noncenter focus
var mid_X, mid_Y;

// This point forms the boundary of the ellipse as theta varies
var boundary_X, boundary_Y;

// These are the coordinates of the moving end of the line segment during the sigmoid rotation
var temp_X, temp_Y;

// Used to initialize the noncenter focus, the midpoint, and the center of the main circle
var makeBubs = true;
var bubbles = [];

// Angle formed in the center of the main circle measured counterclockwise from the downward y direction.
var theta = 0.01;

// This is the point that lies on the circle
var onCircle_X = r * Math.sin(theta);
var onCircle_Y = r * Math.cos(theta);

var interval_track = 0;
var chord_interval = 1;
var theta_speed = 0.05;
var manual = true;
var phi;
var radius_slope;
var sigmoidInput = 0;
var sigmoidOutput;
var fociMode = false;
var perpslope;
var old_theta;
var allowArrowKeys = false;