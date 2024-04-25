let colorBtn = document.getElementById("colorButton");
const colors = ["red", "orange", "yellow", "green", "blue", "navy","purple"];
let colorIndex = 0;

colorBtn.addEventListener("click", ()=> {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});