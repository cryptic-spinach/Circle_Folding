function dom_init() {
  createCanvas(windowWidth, windowHeight);
  translate(windowWidth/2, windowHeight/2);
  rotate(Math.PI * 2);
  background(0);

  clear_button = createButton('Clear chord trails');
  clear_button.position(20, 20);
  clear_button.mousePressed(clearChordTrails);
  clear_button.attribute('disabled', 'true');
  clear_button.style('background-color', '#4CAF50');
  clear_button.style('border', 'none');
  clear_button.style('color', 'white');

  toggle_button = createButton('Auto/Manual toggle');
  toggle_button.position(20, 50);
  toggle_button.mousePressed(toggle);
  toggle_button.style('background-color', '#4CAF50');
  toggle_button.style('border', 'none');
  toggle_button.style('color', 'white');

  slider = createSlider(0, Math.PI*2, 0, 0.04);
  slider.position(20, 85);
  slider.style('-webkit-appearance', 'none');
  slider.style('background-color', 'rgb(80,80,80)');
  slider.style('border-radius', '5px');

  theta_text = createElement('p', 'Theta');
  theta_text.position(200, 50);
  theta_text.style('color', 'rgb(255, 255, 255)')
  theta_text.style('font-size', '28px');
  theta_text.style('font-family', 'Calibri');
}
