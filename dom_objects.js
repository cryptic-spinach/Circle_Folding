function dom_init() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  rotate(Math.PI * 2);
  background(0);

  // Implement GUI controls
  text_boi = new Controls();
  gui = new dat.GUI();

  toggle_button = gui.add(text_boi, 'AutoManualToggle').name('Switch to Auto mode');
  rotate_button = gui.add(text_boi, 'RotateToggle').name('Switch to radius view');

  // theta_slider = gui.add(text_boi, 'Theta', 0, 2 * Math.PI).name('Theta (arrow keys)');
  // theta_slider.onChange(function(value) {
  //   theta = value;
  // });

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
      clearChordTrails();
			manual = false;
			toggle_button.name('Switch to Manual Mode');
			// gui.remove(theta_slider);
      gui.remove(rotate_button);
      clear_button = gui.add(text_boi, 'clearTrails').name('Clear Chord Trails');
		} else if (manual == false) {
      clearChordTrails();
			manual = true;
			toggle_button.name('Switch to Auto Mode');
      gui.remove(clear_button);
			// theta_slider = gui.add(text_boi, 'Theta', 0, Math.PI * 2).name('Theta (arrow keys)');
			// theta_slider.setValue(theta % (2 * Math.PI));
			// theta_slider.onChange(function(value) {
			// 	theta = value;
			// });
      if (fociMode == true) {
        rotate_button = gui.add(text_boi, 'RotateToggle').name('Switch to Foci View');
      } else if (fociMode == false) {
        rotate_button = gui.add(text_boi, 'RotateToggle').name('Switch to Radius View');
      }

		}
	}
}
