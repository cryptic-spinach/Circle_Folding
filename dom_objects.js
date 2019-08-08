function dom_init() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  rotate(Math.PI * 2);
  background(0);

  // Implement GUI controls
  text_boi = new Controls();
  gui = new dat.GUI();

  toggle_button = gui.add(text_boi, 'AutoManualToggle').name('Switch to Auto');

  theta_slider = gui.add(text_boi, 'Theta', 0, 2 * Math.PI);
  theta_slider.onChange(function(value) {
    theta = value;
  }

)

}

Controls = function() {
	this.Theta = 0;
  this.clearTrails = function() {
    clearChordTrails();
  }
  this.AutoManualToggle = function() {
		if (manual == true) {
      clearChordTrails();
			manual = false;
			toggle_button.name('Switch to Manual');
			gui.remove(theta_slider);
      clear_button = gui.add(text_boi, 'clearTrails').name('Clear Chord Trails');
		} else if (manual == false) {
      clearChordTrails();
			manual = true;
			toggle_button.name('Switch to Auto');
      gui.remove(clear_button)
			theta_slider = gui.add(text_boi, 'Theta', 0, Math.PI * 2);
			theta_slider.setValue(theta % (2 * Math.PI));
			theta_slider.onChange(function(value) {
				theta = value;
			});
		}
	}
};
