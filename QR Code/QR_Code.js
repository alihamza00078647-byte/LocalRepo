// https://quickchart.io/qr?text=facebook.com

const imageBox = document.querySelector(".image-box");
const btn = document.querySelector("button");
const input = document.querySelector("input");

function getQRCode(createQR){

    // Will request for QR Code
    let req =  `https://quickchart.io/qr?text=${createQR}`;
    document.querySelector("img").src = req;
    // add class show QR in img tag
    document.querySelector("img").classList.add("showQR");

}

// Awake on click button
btn.addEventListener("click", () => {
    // take user input as value
    let createQR = input.value;
    // pass Argument to function
    getQRCode(createQR);
});