import Point from '@danehansen/point'

import Hair from './hair.js';

/**
 * ...
 * @author Jezzamon
 */
export default class Pea {

	constructor(x, y, startColor, endColor, hairLength = 8) {
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
		this.image.src = './assets/yes.png';

		this.hairs = [];
		for (let i = 0; i < 6; i ++) {
			let hair = new Hair(x, y, hairLength, startColor, endColor);
			this.hairs[i] = hair;
		}
	}

	update() {
		this.x += this.dx;
		this.y += this.dy;
		this.shuffle(2);
		this.damp(0.6);

		for (let i = 0; i < this.hairs.length; i ++) {
			let hair = this.hairs[i];
			let amt = i / (this.hairs.length - 1)

			let hairPoint = new Point(
				this.x - this.image.width / 2 + (0.3 + 0.3 * amt) * this.image.width,
				this.y - this.image.height / 2 + window.random.real(0.1, 0.2) * this.image.height);

			hair.move(hairPoint.x, hairPoint.y);

			hair.update();
		}
	}

	glideTo(x, y, amt) {
		let xDist = x - this.x;
		let yDist = y - this.y;
		let rSquaredDist = xDist * xDist + yDist * yDist;
		let rDist = Math.sqrt(rSquaredDist);

		if (rDist < 1) {
			return;
		}

		this.dx += amt * xDist;
		this.dy += amt * yDist;
	}

	shuffle(amt) {
		let point = Point.polar(amt, window.random.real(0, 2 * Math.PI));
		this.dx += point.x;
		this.dy += point.y;
	}

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

	render(context) {
		// TODO: rotate the person.
		context.drawImage(this.image, this.x - this.image.width / 2, this.y - this.image.height / 2);

		for (let i = 0; i < this.hairs.length; i ++) {
			this.hairs[i].render(context);
		}
	}

}