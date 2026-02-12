// const url = "https://source.unsplash.com/800x600/?";

const imgBox = document.querySelector(".item-box");
const searchBtn = document.querySelector(".btn");
const userSearch = document.querySelector(".search-items");

// console.log(searchBtn);
// console.log(userSearch);


searchBtn.addEventListener("click", () => {
    imgBox.innerHTML = "";
    for (let i = 0; i<10; i++){
        const img = document.createElement("img");
        img.alt = "Image Not Found";
        img.src = `https://loremflickr.com/800/600/${userSearch.value}?lock=${i}`;
        imgBox.appendChild(img);
    }
});
