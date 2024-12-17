const sketchArea = document.querySelector(".sketch-area");
const sketchDiv = document.querySelector(".sketch-div");

const createSketchArea = (amountX, amountY) => {
  let totalAmount = Math.floor(amountX * amountY);

  for (let i = 0; i < totalAmount; i++) {
    const sketchDiv = document.createElement("div");
    sketchDiv.classList.add("sketch-div");
    sketchDiv.setAttribute("id", `sketch-div-${i}`);
    sketchArea.append(sketchDiv);
  }
};

sketchArea.addEventListener("mouseover", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("sketch-div") && e.target.style.opacity < 1) {
    let opacity = Number(getComputedStyle(e.target).opacity);
    opacity += 0.1;
    e.target.style.opacity = opacity;
  }
});

createSketchArea(5, 5);
