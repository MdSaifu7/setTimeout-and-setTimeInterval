let img = document.querySelector(".img");

img.addEventListener("dblclick", function () {
  img.style.opacity = 0.7;
  img.classList.add("move");
  setTimeout(function () {
    img.style.opacity = 0;
    img.classList.remove("move");
  }, 1000);
});
