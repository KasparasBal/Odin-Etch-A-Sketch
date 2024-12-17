const sketchArea = document.querySelector(".sketch-area");
const buttonContainer = document.querySelector(".color-pick-area");

let defaultColor = "#ffffff";
let color = "rgb(222 208 16)";

const createSketchArea = (amountX, amountY) => {
  let totalAmount = Math.floor(amountX * amountY);

  for (let i = 0; i < totalAmount; i++) {
    const sketchDiv = document.createElement("div");
    sketchDiv.classList.add("sketch-div");
    sketchDiv.setAttribute("id", `sketch-div-${i}`);
    sketchDiv.backgroundColor = defaultColor;
    sketchArea.append(sketchDiv);
  }
};

sketchArea.addEventListener("mouseover", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("sketch-div")) {
    let currentBgColor = getComputedStyle(e.target).backgroundColor;
    let targetOpacity = Number(getComputedStyle(e.target).opacity);

    if (currentBgColor !== color) {
      // Change color and reset opacity if color is different
      e.target.style.backgroundColor = color;
      e.target.style.opacity = 0.1;
      console.log(`if  currentBGColor ${currentBgColor}`);
      console.log(`if color ${color}`);
      console.log(`if ${targetOpacity}`);
    } else if (targetOpacity < 1) {
      e.target.style.opacity = targetOpacity + 0.1;
      console.log(`else if ${targetOpacity}`);
    }
  }
});

buttonContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("color-pick-area"))
    color = e.target.getAttribute("data-color");
});

createSketchArea(6, 7);
