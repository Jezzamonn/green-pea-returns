import Color from 'color';
import Random from 'random-js';

import HairPoint from './hairpoint.js';
import Hair from './hair.js';
import Pea from './pea.js';

// Inital global random dealio.
window.random = new Random();

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let mousePosition = null;

let peas = [];

function init() {
	peas[0] = new Pea(window.innerWidth / 2, window.innerHeight / 2, Color('#10438a'), Color('#1f9178'));

	handleResize();

	// Set up event listeners.
	window.addEventListener('resize', handleResize);
	document.addEventListener('mousemove', handleMouseMove);

	// Kick off the update loop
	window.requestAnimationFrame(everyFrame);
}

// TODO: Handle framerate/game updating in separate loops (e.g. https://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing)
function everyFrame() {
	update();
	render();
	requestAnimationFrame(everyFrame);
}

function update() {
	// update player
	if (mousePosition) {
		peas[0].glideTo(mousePosition.x, mousePosition.y, /* glideAmt = */ 0.2)
	}

	for (let i = 0; i < peas.length; i ++) {
		peas[i].update();
	}
}

function render() {
	context.fillStyle = '#e3cfe1';
	context.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < peas.length; i ++) {
		peas[i].render(context);
	}
}

function handleResize(evt) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	render();
}

function handleMouseMove(evt) {
	mousePosition = {x: evt.clientX, y: evt.clientY};
}

init();