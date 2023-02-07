let CANVAS, CTX, VIDEO;
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
  requestAnimationFrame(animateTorchEffect);
}
