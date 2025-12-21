const images = document.querySelectorAll("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const roundBtns = document.querySelectorAll(".round-btn");

let count = 0;

images.forEach((el, i) => {
    el.style.left = `${i * 100}%`;
});

const slideImage = () => {
    images.forEach(el => {
        el.style.transform = `translateX(-${count * 100}%)`;
    });

    roundBtns.forEach(btn => btn.classList.remove("active"));
    roundBtns[count].classList.add("active");
}

prev.addEventListener("click", () => {
    if (count > 0) {
        count--;
        slideImage();
    }
});

next.addEventListener("click", () => {
    if (count < images.length - 1) {
        count++;
        slideImage();
    }
});

function autoSlide() {
    if (count < images.length - 1) {
        count++;
    } else {
        count = 0;
    }
    slideImage();
}


roundBtns.forEach((element, index) => {
    element.addEventListener("click", (event) => {

        // remove active class from all element
        roundBtns.forEach(el => el.classList.remove("active"));

        // add active class to selected element
        event.target.classList.add("active");
        count = index;
        slideImage();
    });
});


setInterval(autoSlide, 3000);
