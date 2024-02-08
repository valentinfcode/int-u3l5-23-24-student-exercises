let body = document.querySelector("body");
let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think .style does?

// 2. Try the following:
// - Make it so that the colors are different than what's used.
// - Try using a hex color code.
button.addEventListener("click", function() {
    body.style.backgroundColor = "#40E0D0";
    header.style.color = "white";
    img.style.border = "5px solid white";
});