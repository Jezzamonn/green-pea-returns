import Hair from './hair.js';

/**
 * ...
 * @author Jezzamon
 */
export default class Pea {

	constructor(x, y, startColor, endColor, hairLength = 8, flowy = true) {
		this.bitmapData = null;
		// TODO: Be an actual image
		this.x = 0;
		this.y = 0;
		this.dx = 0;
		this.dy = 0;
		this.speed = 0;

		this.x = x;
		this.y = y;

		this.image = new Image();
		// This does take some time to load... but I think it may be fine to not even wait for it.
		this.image.src = '../assets/yes.png';

		this.hairs = [];
		for (let i = 0; i < 6; i ++) {
			let hair = new Hair(x, y, hairLength, startColor, endColor, flowy);
			this.hairs[i] = hair;
		}
	}

	update() {
		this.x += this.dx;
		this.y += this.dy;
		this.damp(0.6);

		for (let i = 0; i < this.hairs.length; i ++) {
			let hair = this.hairs[i];
			let amt = i / (this.hairs.length - 1)

			//let hairPoint = new Point((0.3 + 0.3 * amt) * image.width, Rndm.float(0.1, 0.2) * image.height);
			//hairPoint = matrix.transformPoint(hairPoint);

			//hair.move(hairPoint.x, hairPoint.y);

			hair.update();
		}
	}

	glideTo(x, y, amt) {
		let xDist = x - (this.x + 0.5 * this.image.width);
		let yDist = y - (this.y + 0.5 * this.image.height);
		let rSquaredDist = xDist * xDist + yDist * yDist;
		let rDist = Math.sqrt(rSquaredDist);

		if (rDist < 1) {
			return;
		}

		this.dx += amt * xDist;
		this.dy += amt * yDist;
	}

	// shuffle(amt) {
	// 	let point = Point.polar(amt, Rndm.float(2 * Math.PI));
	// 	dx += point.x;
	// 	dy += point.y;
	// }

	repulse(x, y, amt = 70) {
		let xDist = x - this.x;
		let yDist = y - this.y;
		let rSquaredDist = xDist * xDist + yDist * yDist;
		let rDist = Math.sqrt(rSquaredDist);

		this.dx -= amt * xDist / (rSquaredDist);
		this.dy -= amt * yDist / (rSquaredDist);
	}

	damp(amt) {
		this.dx *= amt;
		this.dy *= amt;
	}

	get centerX() {
		return this.x + 0.5 * this.image.width;
	}

	get centerY() {
		return this.y + 0.5 * this.image.height;
	}

	render(context) {
		// TODO: rotate the person
		context.drawImage(this.image, this.centerX, this.centerY);

		for (let i = 0; i < this.hairs.length; i ++) {
			this.hairs[i].render(context);
		}
	}

}