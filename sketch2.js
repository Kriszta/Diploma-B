function setup() {
	createCanvas(windowWidth, windowHeight)

	var x, y, a, b, c, d, e, angle;
	//a = 20
	x = width / 2;
	y = height / 2;


	background(236, 236, 236);
	//noFill();

	noStroke();
	fill(255,255,255);
	arc(x, y, 600, 600, 0, PI * 2)
	//strokeWeight(1);

	fill(0,0,0,50);
	//b = PI / 180

	var start = 0;
	var stop = 10;

	for(j = 0; j < 36; j++){

			d = 0
			for (i = start; i < stop; i++) {

			d = d + random(-1, 1);
			e = random(1, 10)
			fill(255 - i, 0, i, 200);
			//stroke(0 + e * d, 0, 30 + e * e, 50);
			//angle = PI / 30 * i + (random(- PI / 90, PI / 90))
			angle = PI / 360 * i
			arc(x + cos(angle) * 300 + e, y + sin(angle) * 300 - e, 10 + d*20, 10 + d*20, 0, PI * 2);

		}
		start=stop;
		stop+=10;
	}




	noLoop()
}

function draw() {
	// don't use draw
}
