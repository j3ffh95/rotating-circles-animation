const circles = document.querySelectorAll(".circle");

circles.forEach((circle, idx) => {
  circle.style.borderWidth = (idx + 1) * 10 + "px";
  circle.style.zIndex = -idx;
});
