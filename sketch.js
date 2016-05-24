var cs = 50;
var xoff = 0;
var grow = 0;
var growList = [50];

function setup() {
	createCanvas(1000, 1000);
	background('#FFFFFF');
	for (var i = 0; i < 50; i++) {
		growList[i] = random(0, 1);
		print(growList[i]);

	}
}

function draw() {
	push();
	translate(width/2,-height/2);
	rotate(QUARTER_PI);
	circles();
	pop();
}

function circles() {
 background('#363448');

	fill(255);


	xoff += 0.015;
	noFill();

	for (var x = cs; x < width; x += width / 10) {
		for (var y = cs; y < height; y += height / 10) {
			grow = map(sin(xoff), 0, 1, 2, 3.5);
      if (dist(touchX,touchY,x,y) <=cs*grow){
      	stroke(random(255),random(255), 200);
      }
			stroke(x / 3, y / 3, 200);
			ellipse(x, y, cs * grow, cs * grow);
		}
	}
}