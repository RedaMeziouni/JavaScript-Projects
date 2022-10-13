// bring the necessary elements from the DOM 
const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__buttons--format");
const btnMinify = document.querySelector(".controls__buttons--minify");

// Formatting the Object
btnFormat.addEventListener("click", () => {
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);

    outputArea.value = formatted;
});

// Minify the Object
btnMinify.addEventListener("click", () => {
    const minified = JSON.stringify(JSON.parse(inputArea.value));

    outputArea.value = minified;
});