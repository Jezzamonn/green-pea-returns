import HairPoint from './hairpoint.js';
import Hair from './hair.js';
import Pea from './pea.js';

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let peas = [];

function init() {
	peas[0] = new Pea(20, 20);

	handleResize();
	window.addEventListener('resize', handleResize);
	window.requestAnimationFrame(everyFrame);
}

// TODO: Handle framerate/game updating in separate loops (e.g. https://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing)
function everyFrame() {
	update();
	render();
	requestAnimationFrame(everyFrame);
}

function update() {
	for (let i = 0; i < peas.length; i ++) {
		peas[i].update();
	}
}

function handleResize(evt) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	render();
}

function render() {
	context.fillStyle = '#FF00FF';
	context.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < peas.length; i ++) {
		peas[i].render(context);
	}
}

init();