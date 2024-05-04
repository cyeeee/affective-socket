const socket = io.connect('http://localhost:3000');;
socket.on('input', displayInput);
socket.on('result', displayVisual);

var input, button, input_prompt, content;

const ColorMap = new Map();

var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();
	
	// color mapping
	ColorMap.set('disappointment', color(129, 140, 169));
	ColorMap.set('sadness', color(58, 80, 157));
	ColorMap.set('annoyance', color(154, 108, 108));
	ColorMap.set('neutral', color(212, 235, 245));
	ColorMap.set('disapproval', color(111, 111, 111));
	ColorMap.set('realization', color(186, 193, 218));
	ColorMap.set('nervousness', color(137, 102, 172));
	ColorMap.set('approval', color(171, 206, 179));
	ColorMap.set('joy', color(235, 194, 174));
	ColorMap.set('anger', color(176, 36, 24));
	ColorMap.set('embarrassment', color(187, 150, 150));
	ColorMap.set('caring', color(204, 180, 175));
	ColorMap.set('remorse', color(133, 134, 168));
	ColorMap.set('disgust', color(78, 126, 49));
	ColorMap.set('grief', color(68, 70, 95));
	ColorMap.set('confusion', color(174, 169, 108));
	ColorMap.set('relief', color(185, 213, 227));
	ColorMap.set('desire', color(192, 131, 97));
	ColorMap.set('admiration', color(165, 204, 198));
	ColorMap.set('optimism', color(233, 229, 157));
	ColorMap.set('fear', color(81, 20, 145));
	ColorMap.set('love', color(239, 97, 97));
	ColorMap.set('excitement', color(249, 210, 105));
	ColorMap.set('curiosity', color(187, 181, 142));
	ColorMap.set('amusement', color(212, 234, 183));
	ColorMap.set('surprise', color(175, 215, 81));
	ColorMap.set('gratitude', color(236, 215, 129));
	ColorMap.set('pride', color(86, 189, 182));

  for (const c of ColorMap.values()) {
		c.setAlpha(0);
		circles.push(new circleObj(windowWidth/2, windowHeight/2));
	}

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(sendInput);

  input_prompt = createElement('h2', 'Type something');
  input_prompt.position(20, 5);

  content = createElement('h2', '');
  content.position(windowWidth/2, windowHeight/2);
}

function displayInput(data) {
  content.html(data.userInput);
  content.center();
}

function displayVisual(data) {
	for (let i = 0; i < data.length; i++) {
		let e = String(data[i].label);
		let s = data[i].score;
		let score2alpha = int(map(s, 0, 1, 0, 255));
		ColorMap.get(e).setAlpha(score2alpha);
	}
}

function sendInput() {
  const userInput = input.value();
//   console.log('Sending: ' + userInput);

  var data = { userInput };
  socket.emit('input', data);
	
  input.value('');
}

function keyReleased() {
	if (keyCode === 13) {	// ENTER
		sendInput();
	}
}

var idx = 0;

function draw() {
	background(255);
	for (const c of ColorMap.values()) {
  		// fill(c);
		// rect(0, 0, windowWidth, windowHeight);
		circles[idx].display(c);
		idx++;
	}
	idx = 0;
}