// Initialize the canvas and make a video refernece
const canvasWidth = 800;
const canvasHeight = 600;
let videoInput;

// setUp() funtion that will be called by p5
function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  videoInput = createCapture(VIDEO);
  videoInput.size(canvasWidth, canvasHeight);
  videoInput.hide();
}

function draw()
{
  image(videoInput, 0, 0, canvasWidth, canvasHeight); // render video from webcam
}