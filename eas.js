const container = document.querySelector(".container");

const boxes16 = 16 * 16;
const size16 = (100 / 16).toFixed(5);


for (let i = 0; i < boxes16; i++) {
    const box = document.createElement("div");
    box.classList.add("single-box");
    box.setAttribute(`style`, `height: ${size16}%; width: ${size16}%; border: 1px solid red; box-sizing: border-box;`);
    container.appendChild(box);
};

const boxes = document.querySelectorAll(".single-box")

boxes.forEach(box => {
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    });
});

//const boxesPrompt = prompt("How many boxes do you want per row?");