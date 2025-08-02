const container = document.querySelector(".container");

const boxes16 = 16 * 16;
const size16 = (100 / 16).toFixed(5);

const boxes = document.querySelectorAll(".single-box")
for (let i = 0; i < boxes16; i++) {
    const box = document.createElement("div");
    box.classList.add("single-box");
    box.setAttribute(`style`, `height: ${size16}%; width: ${size16}%; border: 1px solid red; box-sizing: border-box;`);
    container.appendChild(box);
};



//const boxesPrompt = prompt("How many boxes do you want per row?");
// background-color: rgb(${randomRgb}, ${randomRgb}, ${randomRgb})