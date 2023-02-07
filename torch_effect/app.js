let CANVAS, CTX, VIDEO;

const COLOR = [13, 25, 93];

function main() {
  CANVAS = document.getElementById("myCanvas");
  CTX = CANVAS.getContext("2d");

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (rawData) {
      VIDEO = document.createElement("video");
      VIDEO.srcObject = rawData;
      VIDEO.play();
      VIDEO.onloadeddata = animateTorchEffect;
    })
    .catch(function (err) {
      alert(err);
    });
}

function animateTorchEffect() {
  CANVAS.width = VIDEO.videoWidth;
  CANVAS.height = VIDEO.videoHeight;
  CTX.drawImage(VIDEO, 0, 0, CANVAS.width, CANVAS.height);

  const { data } = CTX.getImageData(0, 0, CANVAS.width, CANVAS.height);
  //   console.log(`rgb(${data[0]}, ${data[1]}), ${data[2]}`); //To get the blue color
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]; //red
    const g = data[i + 1]; //green
    const b = data[i + 2]; //blue
    // const a = data[i + 3]; //alpha

  }

  //requestAnimationFrame(animateTorchEffect);
}
