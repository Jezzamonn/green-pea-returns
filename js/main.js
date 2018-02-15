import HairPoint from './hairpoint.js';
import Hair from './hair.js';
import Pea from './pea.js';
import Point from '@danehansen/point'
import Random from 'random-js'

let random = new Random();

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

var hp = new HairPoint();
var h = new Hair();
var p = new Pea(20, 20);

function handleResize(evt) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	render();
}

function render() {
	console.log('It is thy time to rendereth')
	context.fillStyle = '#FF00FF';
	context.fillRect(0, 0, canvas.width, canvas.height);

	p.render(context);
}

handleResize();
window.addEventListener('resize', handleResize);