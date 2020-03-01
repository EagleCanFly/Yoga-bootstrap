const sliderRow = document.querySelector(".slider-row");
const sliderRowItems = document.querySelectorAll(".slider-row img");
let doc = document;

let counter = 1;
const size = doc.sliderRowItems[0].clientWidth;
// const size = 640;
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");


sliderRow.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener("click", () => {
    if (counter >= size - 1) return;
    counter++;
    sliderRow.style.transition = "all 0.3s ease-in-out";
    sliderRow.style.transform = "translateX(" + (-size * counter) + "px)";
});
prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    counter--;
    sliderRow.style.transition = "all 0.3s ease-in-out";
    sliderRow.style.transform = "translateX(" + (-size * counter) + "px)";
});

sliderRow.addEventListener("transitionend", () => {
    if (sliderRowItems[counter].className == "firstSlide") {
        counter = 1;
        sliderRow.style.transition = "none";
        sliderRow.style.transform = "translateX(" + (-size * counter) + "px)";
    } else if (sliderRowItems[counter].className == "lastSlide") {
        counter = sliderRowItems.length - 2;
        sliderRow.style.transition = "none";
        sliderRow.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});