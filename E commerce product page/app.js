const frontSide = document.querySelector(".front");
const backSide = document.querySelector(".back");
const leftSide = document.querySelector(".left");
const images = document.querySelector("img");
const slide1 = document.querySelector(".slide1");

// console.log(shirt);

frontSide.addEventListener("click", () => {
    images.src = "Front side.jpg";
});

backSide.addEventListener("click", () => {
    images.src = "Back side.jpg";
});

leftSide.addEventListener("click", () => {
    images.src = "side view.jpg";
});

// backSide.addEventListener("click", () => {
//     shirt.src = "file:///D:/My%20Code%20Base/JavaScript/JavaScript%…ts/E%20commerce%20product%20page/Back%20Side.jpg";
// });

