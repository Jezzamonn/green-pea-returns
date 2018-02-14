import HairPoint from './hairpoint.js';
import Hair from './hair.js';


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

hp = new HairPoint();
h = new Hair();