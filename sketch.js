function setup() {
	createCanvas(windowWidth, windowHeight)

	var x, y, a, b, c, d, e, angle;
	//a = 20
	x = width / 2;
	y = height / 2;

	background(236, 236, 236);
	noFill();
	//noStroke();
	strokeWeight(1);

	stroke(0,0,0,25);
	//b = PI / 180

	var start = 0;
	var stop = 20;

	for(j = 0; j < 720; j++){

			d = 0
			for (i = start; i < stop; i++) {

			d = d + random(-5, 5);
			e = random(1, 10)
			//stroke(0 + e * d, 0, 30 + e * e, 50);
			//angle = PI / 30 * i + (random(- PI / 90, PI / 90))
			angle = PI / 360 * i / 2
			arc(x + cos(angle) * 250 + e, y + sin(angle) * 250 - e, 50 + d * 20, 50 + d * 20, 0, PI * 2);

		}
		start=stop;
		stop+=10;
	}

	for(j = 0; j < 720; j++){

			d = 0
			for (i = start; i < stop; i++) {

			d = d + random(-5, 5);
			e = random(1, 10)
			//stroke(0 + e * d, 0, 30 + e * e, 50);
			//angle = PI / 30 * i + (random(- PI / 90, PI / 90))
			angle = PI / 360 * i / 2
			arc(x + cos(angle) * 100 + e, y + sin(angle) * 100 - e, 60 + d *3, 60 + d*3, 0, PI * 2);

		}
		start=stop;
		stop+=10;
	}



	noLoop()
}

function draw() {
	// don't use draw
}


//HEllo test comment
