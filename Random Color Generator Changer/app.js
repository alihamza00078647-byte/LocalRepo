const body = document.querySelector("body");
const btn = document.querySelector("#btn");
const displayColorName = document.querySelector("#display");


const getSevenNumbers = () => { // After Converting into HexaDecimal 7 Numbers Becomes 6.
    let deci = "";
    let randomNum = 0;
    for (let i = 0; i<7; i++){
        randomNum = Math.floor(Math.random() * 9);
        deci += randomNum;
    }
    return deci; // Return Number in String type.
}

const getHexaNumber = () => {

    const decimalNumber = parseInt(getSevenNumbers());
    
    // 16 is Used with toString Because the base of HexaDeci Num is 16.
    const HexaDecimal = decimalNumber.toString(16).toUpperCase();

    return "#" + HexaDecimal;
}

const colorChanger = () => {
   body.style.backgroundColor = getHexaNumber();
    displayColorName.innerText = getHexaNumber();
}

btn.addEventListener("click", () => {
    colorChanger();
});

// setInterval(colorChanger, 1500);

