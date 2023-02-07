let CANVAS, CTX, VIDEO;

const COLOR = [13, 25, 93];

const THRESHOLD = 60;

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

  //   Store Locations
  const locs = [];

  const { data } = CTX.getImageData(0, 0, CANVAS.width, CANVAS.height);
  //   console.log(`rgb(${data[0]}, ${data[1]}), ${data[2]}`); //To get the blue color
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]; //red
    const g = data[i + 1]; //green
    const b = data[i + 2]; //blue
    // const a = data[i + 3]; //alpha

    if (distance([r, g, b], COLOR) < THRESHOLD) {
      const x = (i / 4) % CANVAS.width;
      const y = Math.floor(i / 4 / CANVAS.width);
      locs.push({ x, y });
    }
  }
  //   console.log(locs.length);
  //   Determine if the Application Detect the blue color pixels
  //   for (let i = 0; i < locs.length; i++) {
  //     CTX.fillStyle = "green";
  //     CTX.beginPath();
  //     CTX.arc(locs[i].x, locs[i].y, 1, 0, Math.PI * 2);
  //     CTX.fill();
  //   }

  if (locs.length > 0) {
    const center = { x: 0, y: 0 };
    for (let i = 0; i < locs.length; i++) {
      center.x += locs[i].x;
      center.y += locs[i].y;
    }
    center.x /= locs.length;
    center.y /= locs.length;

    CTX.fillStyle = "green";
    CTX.arc(center.x, center.y, 50, 0, Math.PI * 2);
    CTX.fill();
  }

  requestAnimationFrame(animateTorchEffect);
}

function distance(v1, v2) {
  return Math.sqrt(
    (v1[0] - v2[0]) * (v1[0] - v2[0]) +
      (v1[1] - v2[1]) * (v1[1] - v2[1]) +
      (v1[2] - v2[2]) * (v1[2] - v2[2])
  );
}
