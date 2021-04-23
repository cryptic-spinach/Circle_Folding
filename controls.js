function dom_init() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  rotate(Math.PI * 2);
  background(0);

  // Implement GUI controls
  text_boi = new Controls();
  gui = new dat.GUI();

  toggle_button = gui.add(text_boi, 'AutoManualToggle').name('Switch to Auto Mode');
  rotate_button = gui.add(text_boi, 'RotateToggle').name('Switch to Radius View');


}

Controls = function() {
	this.Theta = 0;
  this.RotateToggle = function() {
    if (fociMode == false) {
      fociMode = true;
      rotate_button.name("Switch to Foci View");
    } else if (fociMode == true) {
      fociMode = false;
      rotate_button.name("Switch to Radius View");
    }
  }
  this.clearTrails = function() {
    clearChordTrails();
  }
  this.AutoManualToggle = function() {
		if (manual == true) {
      // Old theta is used to save the value of theta before switching to Auto
      // This is needed for radiusToFociRotate to work properly 
      old_theta = theta;
      clearChordTrails();
			manual = false;
			toggle_button.name('Switch to Manual Mode');
      gui.remove(rotate_button);
      clear_button = gui.add(text_boi, 'clearTrails').name('Clear Chord Trails');
		} else if (manual == false) {
      theta = old_theta;
      clearChordTrails();
			manual = true;
			toggle_button.name('Switch to Auto Mode');
      gui.remove(clear_button);
      
      if (fociMode == true) {
        rotate_button = gui.add(text_boi, 'RotateToggle').name('Switch to Foci View');
      } else if (fociMode == false) {
        rotate_button = gui.add(text_boi, 'RotateToggle').name('Switch to Radius View');
      }

		}
	}
}
