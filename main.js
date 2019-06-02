let circles = document.querySelectorAll(".circle");
let delay = 0;

for (let i = 0; i < circles.length; i++) {
  const element = circles[i];
  delay = delay + 0.4;
  element.style.animationDelay = `${delay}s`;
}
