import HairPoint from './hairpoint.js';
import Hair from './hair.js';
import Pea from './pea.js';
import Point from '@danehansen/point'
import Random from 'random-js'

let random = new Random();


function handleResize(evt) {
	var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var context = canvas.getContext('2d');
	context.fillStyle = "#FF00FF";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

handleResize();
window.addEventListener('resize', handleResize);

var hp = new HairPoint();
var h = new Hair();
var p = new Pea();

for (let i = 0; i < 20; i ++) {
	let point = Point.polar(1, random.real(0, 2 * Math.PI));
	console.log(point);
}
