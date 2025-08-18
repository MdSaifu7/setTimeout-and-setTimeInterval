const btn = document.querySelector(".download button");
const leftbar = document.querySelector(".content .bar .left-bar");
const rightbar = document.querySelector(".content .bar .right-bar");

let progressPara = document.querySelector(".right-content p");

let increment = 1;
btn.addEventListener("click", function () {
  console.log("btn pressed");

  // bar.style.backgroundColor = "#2be16a";
  let int = setInterval(function () {
    leftbar.style.transform = `translateX(-${100 - increment}%)`;
    rightbar.style.transform = `translateX(-${100 - increment}%)`;
    progressPara.textContent = `${increment}%`;
    increment += 1;
  }, 50);

  setTimeout(function () {
    clearInterval(int);
  }, 5000);
});
