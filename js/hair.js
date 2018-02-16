import HairPoint from './hairpoint.js';

/**
 * ...
 * @author Jezzamon
 */
export default class Hair {

	constructor(x, y, numPoints, startColor, endColor) {
		this.startColor = startColor;
		this.endColor = endColor;

		this.points = [];
		//this.shape = null;

		this.points[0] = new HairPoint();
		this.points[0].x = x;
		this.points[0].y = y;

		for (let i = 1; i < numPoints; i ++) {
			this.points[i] = new HairPoint();
			this.points[i].x = x;
			this.points[i].y = y;
			this.points[i].prev = this.points[i-1];
		}

		//this.shape = new Shape();
	}

	update() {
		for (let i = 0; i < this.points.length; i ++) {
			this.points[i].update();
		}
	}

	move(x, y) {
		this.points[0].x = x;
		this.points[0].y = y;
	}

	render(context) {
		for (let i = 1; i < this.points.length; i ++) {
			let amt = i / (this.points.length - 1);
			context.beginPath();
			context.moveTo(this.points[i-1].x, this.points[i-1].y);
			context.lineTo(this.points[i].x, this.points[i].y);
			context.lineWidth = 5;
			context.strokeStyle = this.startColor.mix(this.endColor, amt).hex();
			context.stroke();
		}
	}

}