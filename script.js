const texts = [
    "SSC CGL Aspirant",
    "Mathematics Student",
    "Focused & Disciplined",
    "Future Government Officer"
];

let count = 0;
let index = 0;

function typeEffect() {
    const text = texts[count];
    document.querySelector(".typing").textContent =
        text.slice(0, index++);

    if (index > text.length) {
        setTimeout(() => {
            index = 0;
            count = (count + 1) % texts.length;
        }, 1500);
    }
}

setInterval(typeEffect, 120);
