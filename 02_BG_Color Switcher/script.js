const button = document.querySelectorAll(".button");
const container = document.querySelector("#container");
button.forEach(function (box) {
  box.addEventListener("click", function (event) {
    container.style.backgroundColor = event.target.id;
  });
});
