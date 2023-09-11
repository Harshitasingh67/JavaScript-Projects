//we have to generate random color using math.random()

const randomColor = function () {
  const hex = "0123456789ABCDEF";

  let color = "#";

  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

const startButton = function () {
  intervalId = setInterval(changeBgColor, 1000);
};

const stopButton = function () {
  clearInterval(intervalId);
};

document.querySelector(`#start`).addEventListener("click", startButton);

document.querySelector(`#stop`).addEventListener("click", stopButton);
