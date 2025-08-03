const container = document.querySelector(".container");

const boxes16 = 16 * 16;
const size16 = (100 / 16).toFixed(5);

for (let i = 0; i < boxes16; i++) {
    const box = document.createElement("div");
    box.classList.add("single-box");
    box.setAttribute(`style`, `height: ${size16}%; width: ${size16}%; box-sizing: border-box; filter: brightness(100%)`);
    container.appendChild(box);
};

function boxesMouseover() {
    boxes.forEach(box => {
        box.dataset.brightness = "100";
        box.style.filter = "brightness(100%)";
        box.addEventListener("mouseover", function(e) {
            box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            
            let brightness = parseInt(box.dataset.brightness, 10);
            brightness = Math.max(brightness - 10, 0);
            box.dataset.brightness = brightness;
            box.style.filter = `brightness(${brightness}%)`;
            console.log(e);
        });
    });
};

const btnPrompt = document.querySelector(".btnPrompt");
btnPrompt.addEventListener("click", (e) => {
    const boxesPrompt = prompt("How many boxes do you want per row?");
    const nbrBoxes = boxesPrompt * boxesPrompt;
    if (boxesPrompt > 100 || boxesPrompt < 1) {
        alert("Please enter a number between 1 and 100 !");
    } else {
        container.replaceChildren();
        for (let i = 0; i < nbrBoxes; i++) {
            const box = document.createElement("div");
            const boxSize = (100 / boxesPrompt).toFixed(5);
            box.classList.add("single-box");
            box.setAttribute(`style`, `height: ${boxSize}%; width: ${boxSize}%; box-sizing: border-box;`);
            container.appendChild(box);
        };
    };
    boxes = document.querySelectorAll(".single-box");
    boxesMouseover();
    console.log(e);
});

let boxes = document.querySelectorAll(".single-box");

boxesMouseover();