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
		// shape.graphics.clear();
		// shape.graphics.moveTo(points[0].x, points[0].y);
		// for (let i = 1; i < points.length; i ++) {
		// 	let amt = i / (points.length - 1);
		// 	//ColourUtil.combineColours(0x38AD44, 0x97E232, amt);
		// 	//let colour = new Colour();
		// 	//colour.h = amt;
		// 	//colour.s = 0.7;
		// 	//colour.v = 1;
		// 	//colour.getRGBfromHSV();
		// 	//shape.graphics.lineStyle(5, colour.toHex());
		// 	shape.graphics.lineStyle(5, ColourUtil.combineColours(startColor, endColor, amt));
		// 	shape.graphics.lineTo(points[i].x, points[i].y);
		// }

		// context.drawWithQuality(shape, null, null, null, null, false, StageQuality.LOW);
	}

}