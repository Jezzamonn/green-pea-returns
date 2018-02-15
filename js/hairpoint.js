import Point from '@danehansen/point'

/**
 * ...
 * @author Jezzamon
 */
export default class HairPoint {

	constructor() {
		this.prev = null;
		this.x = 0;
		this.y = 0;
		this.dx = 0;
		this.dy = 0;
	}

	update() {
		this.x += this.dx;
		this.y += this.dy;
		if (this.prev) {
			this.accelTowards(this.prev);
		}
		this.damp(0.5);
		this.shuffle(3);
		this.dy -= 0.5;
	}

	accelTowards(point) {
		let xDist = point.x - this.x;
		let yDist = point.y - this.y;
		let rDist = Math.sqrt(xDist * xDist + yDist * yDist);

		if (rDist < 1) {
			return;
		}

		this.dx += 0.4 * xDist;
		this.dy += 0.4 * yDist;
	}

	shuffle(amt) {
		let point = Point.polar(amt, window.random.real(0, 2 * Math.PI));
		this.dx += point.x;
		this.dy += point.y;
	}

	damp(amt) {
		this.dx *= amt;
		this.dy *= amt;
	}

}