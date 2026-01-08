const nums = document.querySelectorAll(".nums");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const screen = document.querySelector(".screen");



let append = "";

nums.forEach(element => {
    element.addEventListener("click", (e) => {
        let n = e.target;
        append += n.value;
        screen.innerText = append;
    });
});

// Evaluate the operator type 
operator.forEach(element => {
    element.addEventListener("click", (e) => {
        let n = e.target;
        append += n.value;
        screen.innerText = append;
    });
});

// Evaluate the result 
equal.addEventListener("click", () => {
    if (!append == ""){
        try{
            let res = eval(append);
            append = "";
            screen.innerText = append;
            screen.innerText = res;
        } catch(e) {
            screen.innerText = "Syntax Error";
        }
    }
});

// Clear the screen
document.querySelector(".clear").addEventListener("click", () => {
    append = "";
    screen.innerText = append;
});


// Delete Each letter (BackSpace) 
document.querySelector(".backspace").addEventListener("click", (e) => {
    if (!screen.textContent.length == ""){
        let getData = screen.textContent;
        let reqValue = getData.slice(0, getData.length - 1);
        append = reqValue;
        screen.innerText = append;
    } else {
        alert("Enter the Required Value");
    }
});